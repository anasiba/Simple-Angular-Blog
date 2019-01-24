import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, erat illum sit ei. Duo eu veniam fierent intellegebat, quod equidem persequeris ne vix. Nam dolor apeirian eu, eam no offendit phaedrum, fuisset menandri elaboraret usu an. Erant liberavisse cum ut, erant eirmod reprehendunt eam no, zril copiosae abhorreant ea nec. Vim ad unum audire suscipiantur, ferri omnes tractatos per ut, ius delicata gubergren at. Meis iusto fuisset ei mea.',
      loveIts: 24,
      created_at: new Date(2018, 5,20,2,13)
    },
    {
      title: 'Mon deuxiéme post',
      content: 'Lorem ipsum dolor sit amet, erat illum sit ei. Duo eu veniam fierent intellegebat, quod equidem persequeris ne vix. Nam dolor apeirian eu, eam no offendit phaedrum, fuisset menandri elaboraret usu an. Erant liberavisse cum ut, erant eirmod reprehendunt eam no, zril copiosae abhorreant ea nec. Vim ad unum audire suscipiantur, ferri omnes tractatos per ut, ius delicata gubergren at. Meis iusto fuisset ei mea.',
      loveIts: 0,
      created_at: new Date(2018, 12,10,11,12)
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, erat illum sit ei. Duo eu veniam fierent intellegebat, quod equidem persequeris ne vix. Nam dolor apeirian eu, eam no offendit phaedrum, fuisset menandri elaboraret usu an. Erant liberavisse cum ut, erant eirmod reprehendunt eam no, zril copiosae abhorreant ea nec. Vim ad unum audire suscipiantur, ferri omnes tractatos per ut, ius delicata gubergren at. Meis iusto fuisset ei mea.',
      loveIts: 10,
      created_at: new Date(2018, 3,15,10,20)
    }
  ];
}
