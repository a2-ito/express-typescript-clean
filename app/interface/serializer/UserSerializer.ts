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
  firstname: string;
  lastname: string;
  email: string;
}

export class UserSerializer extends ApplicationSerializer {
  public user(data: User | null): TResponse<UserResponse> {
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
        name: data.name,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email
      },
      responsedAt: moment().format()
    };
  }

  public users(data: User[]): TResponse<UserResponse[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: data.map(
        (d): UserResponse => {
          return {
            id: d.id,
            name: d.name,
            firstname: d.firstname,
            lastname: d.lastname,
            email: d.email
          };
        }
      ),
      responsedAt: moment().format()
    };
  }

  public delete(): TResponse<Record<string, null>> {
    return {
      code: StatusCode.success,
      data: {},
      responsedAt: moment().format()
    };
  }

}
