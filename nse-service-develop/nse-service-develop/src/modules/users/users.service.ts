import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const emailPrefix = createUserDto.email.split('@').shift();
    const user = new this.userModel({
      ...createUserDto,
      profileImage: `https://ui-avatars.com/api/?name=${emailPrefix}&size=128`,
    });
    return user.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(user: User, updateUser: UpdateUserDto) {
    // prevent empty updates
    if (Object.keys(updateUser)?.length < 1) {
      throw new BadRequestException(
        'Required one or more body parameters to update',
      );
    }
    // findUser and update
    const userProfile = await this.userModel.findOneAndUpdate(
      { email: user.email },
      updateUser,
      { new: true },
    );
    return { user: userProfile };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ email }).lean();
  }
}
