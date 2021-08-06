import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(user: any): string {
    console.log(user);
    
    return user;
  }
}
