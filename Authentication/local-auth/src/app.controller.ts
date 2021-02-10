import { Controller, Get, Post, Request, Response, Render, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './common/guards/login.gaurd';
import { AuthenticatedGuard } from './common/guards/authenticated.guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('login')
  index(@Request() req) : {message: string}{
    return {message: req.flash('loginError')};
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Response() res): void {  
    res.redirect('/home')
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  home() {
    return;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  profile(@Request() req) {
    return {user: req.user};
  }

  @Get('/logout') 
  logout(@Request() req, @Response() res): void {
    // The logout() method is added automatically by Passort upon successful authentication
    req.logout();
    res.redirect('/');
  }  

  @Get('/error')
  @Render('error')
  error() {
    return;
  }
}
