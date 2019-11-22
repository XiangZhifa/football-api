const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

//1.获取联赛列表（包括联赛id等）
app.use('/league_menu', proxy({
  target: 'https://www.dongqiudi.com/api/v2/config/data_menu',
  changeOrigin: true,
  pathRewrite: {
    '^/league_menu': ''
  }
}));
//2.获取联赛具体信息（包括积分榜、射手榜、助攻榜等）
app.use('/league_detail', proxy({
  target: 'https://sport-data.dongqiudi.com/soccer/biz/data/standing',
  changeOrigin: true,
  pathRewrite: {
    '^/league_detail': ''
  },
}));


//3.获取球队基本信息(50004829为teamid)
app.use('/team_detail', proxy({
  target: 'https://www.dongqiudi.com/sport-data/soccer/biz/dqd/team/detail',
  changeOrigin: true,
  pathRewrite: {
    '^/team_detail': ''
  },
}));
//4.获取球队赛程
app.use('/team_schedule', proxy({
  target: 'https://www.dongqiudi.com/sport-data/soccer/biz/dqd/team/schedule',
  changeOrigin: true,
  pathRewrite: {
    '^/team_schedule': ''
  },
}));
//5.获取球队阵容
app.use('/team_member', proxy({
  target: 'https://www.dongqiudi.com/sport-data/soccer/biz/dqd/v1/team/member',
  changeOrigin: true,
  pathRewrite: {
    '^/team_member': ''
  },
}));


//6.获取球员出场数据
app.use('/player_action', proxy({
  target: 'https://www.dongqiudi.com/sport-data/soccer/biz/dqd/person/statistic_new',
  changeOrigin: true,
  pathRewrite: {
    '^/player_action': ''
  },
}));
//7.球员个人信息
app.use('/player_personinfo', proxy({
  target: 'https://www.dongqiudi.com/sport-data/soccer/biz/dqd/person/detail',
  changeOrigin: true,
  pathRewrite: {
    '^/player_personinfo': ''
  },
}));
//8.球员能力
app.use('/player_ability', proxy({
  target: 'https://www.dongqiudi.com/api/data/v2/person_ability',
  changeOrigin: true,
  pathRewrite: {
    '^/player_ability': ''
  },
}));
//9.球员队友
app.use('/player_teammate', proxy({
  target: 'https://www.dongqiudi.com/sport-data/soccer/biz/dqd/person/teammate',
  changeOrigin: true,
  pathRewrite: {
    '^/player_teammate': ''
  },
}));

app.listen(8060);



//1.获取菜单（包括联赛id等）
// https://www.dongqiudi.com/api/v2/config/data_menu
//2.获取联赛具体信息（包括积分榜、射手榜、助攻榜等）
// https://sport-data.dongqiudi.com/soccer/biz/data/standing?competition_id="43"&season_id=14225


//3.获取球队基本信息(50004829为teamid)
// https://www.dongqiudi.com/sport-data/soccer/biz/dqd/team/detail/50004829
//4.获取球队近期赛程
// https://www.dongqiudi.com/sport-data/soccer/biz/dqd/team/schedule/50004829
//5.获取球队阵容
// https://www.dongqiudi.com/sport-data/soccer/biz/dqd/v1/team/member/50004829


//6.获取球员出场数据
// https://www.dongqiudi.com/sport-data/soccer/biz/dqd/person/statistic_new/50222265
//7.球员个人信息
// https://www.dongqiudi.com/sport-data/soccer/biz/dqd/person/detail/50222265
//8.球员能力
// https://www.dongqiudi.com/api/data/v2/person_ability/50222265
//9.球员队友
// https://www.dongqiudi.com/sport-data/soccer/biz/dqd/person/teammate/50222265
