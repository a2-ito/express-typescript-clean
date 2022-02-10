import { User } from "../../domain/User"
import moment from "moment";
import {
  ApplicationSerializer,
  TResponse,
  StatusCode
} from "./ApplicationSerializer"

export interface UserResponse {
  id: number;
  name: string;
}

export class UserSerializer extends ApplicationSerializer {
  public user(data: User): TResponse<UserResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: {
        id: data.id,
        name: data.name
      },
      responsedAt: moment().format()
    };
  }
}
