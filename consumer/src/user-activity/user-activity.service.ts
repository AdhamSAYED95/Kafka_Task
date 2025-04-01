import { Injectable } from '@nestjs/common';
import { UserLog } from './schemas/userLog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class UserActivityService {
  constructor(@InjectModel(UserLog.name) private userModel: Model<UserLog>) {}

  async findAllLogs({
    page,
    limit,
    userName,
    activityType,
    sort,
  }: {
    page: number;
    limit: number;
    userName?: string;
    activityType?: string;
    sort?: 'asc' | 'desc';
  }) {
    const filter: FilterQuery<UserLog> = {};

    if (userName) filter.userName = userName;
    if (activityType) filter.activityType = activityType;

    const [total, data] = await Promise.all([
      this.userModel.countDocuments(filter),
      this.userModel
        .find(filter)
        .sort({ processedAt: sort === 'asc' ? 1 : -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
    ]);

    return {
      data,
      page,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
    };
  }
}
