const AccountTable:Array<Array<any>> = [["Id","IfKing","Ranking","GetScore","GetExp","GetCoin"],["","","","","",""],[10000,1,null,140,1000,10000],[10001,2,1,19,480,4800],[10002,2,2,18,460,4600],[10003,2,3,17,440,4400],[10004,2,4,16,420,4200],[10005,2,5,15,400,4000],[10006,2,6,14,380,3800],[10007,2,7,13,360,3600],[10008,2,8,12,340,3400],[10009,2,9,11,320,3200],[10010,2,10,10,300,3000],[10011,2,11,9,280,2800],[10012,2,12,8,260,2600],[10013,2,13,7,240,2400],[10014,2,14,6,220,2200],[10015,2,15,5,200,2000]];
const AchievementTable:Array<Array<any>> = [["Id","YQID","Yeqian","Mingcheng","Text","Data","Type","DiamondNumber","IconGuid"],["","","","","","","","",""],[1,1,"成长之路",1,13,2,2,10,27544],[2,1,"成长之路",2,13,5,2,15,27544],[3,1,"成长之路",3,13,8,2,30,27544],[4,1,"成长之路",4,13,10,2,50,27544],[5,1,"成长之路",5,13,12,2,100,27544],[6,1,"成长之路",6,13,15,2,100,27544],[7,1,"成长之路",7,13,17,2,100,27544],[8,1,"成长之路",8,13,20,2,100,27544],[9,1,"成长之路",9,13,22,2,100,27544],[10,1,"成长之路",10,13,25,2,100,27544],[11,1,"成长之路",11,13,28,2,100,27544],[12,1,"成长之路",12,13,30,2,100,27544],[13,2,"疯狂对局",14,29,1,2,10,27544],[14,2,"疯狂对局",15,29,3,2,30,27544],[15,2,"疯狂对局",16,29,5,2,50,27544],[16,2,"疯狂对局",17,29,10,2,100,27544],[17,2,"疯狂对局",18,29,20,2,200,27544],[18,2,"疯狂对局",19,29,25,2,250,27544],[19,2,"疯狂对局",20,29,30,2,300,27544],[20,2,"疯狂对局",21,29,50,2,500,27544],[21,2,"疯狂对局",22,29,70,2,700,27544],[22,2,"疯狂对局",23,29,100,2,1000,27544],[23,2,"疯狂对局",24,29,150,2,1500,27544],[24,2,"疯狂对局",25,29,200,2,2000,27544],[25,2,"疯狂对局",26,29,300,2,3000,27544],[26,2,"疯狂对局",27,29,400,2,4000,27544],[27,2,"疯狂对局",28,29,500,2,5000,27544],[28,3,"商店常客",30,38,1000,1,10,27542],[29,3,"商店常客",31,38,2000,1,20,27542],[30,3,"商店常客",32,38,5000,1,50,27542],[31,3,"商店常客",33,38,10000,1,100,27542],[32,3,"商店常客",34,38,20000,1,200,27542],[33,3,"商店常客",35,38,50000,1,500,27542],[34,3,"商店常客",36,38,100000,1,1000,27542],[35,3,"商店常客",37,38,200000,1,2000,27542],[36,4,"弑君者",39,45,1,1,100,27542],[37,4,"弑君者",40,45,5,1,100,27542],[38,4,"弑君者",41,45,10,1,100,27542],[39,4,"弑君者",42,45,20,1,200,27542],[40,4,"弑君者",43,45,50,1,200,27542],[41,4,"弑君者",44,45,100,1,100000,27542],[42,5,"诶嘿，脚滑了",46,56,3,1,50,27542],[43,5,"诶嘿，脚滑了",47,56,6,1,50,27542],[44,5,"诶嘿，脚滑了",48,56,15,1,50,27542],[45,5,"诶嘿，脚滑了",49,56,30,1,50,27542],[46,5,"诶嘿，脚滑了",50,56,90,1,50,27542],[47,5,"诶嘿，脚滑了",51,56,180,1,50,27542],[48,5,"诶嘿，脚滑了",52,56,300,1,50,27542],[49,5,"诶嘿，脚滑了",53,56,600,1,50,27542],[50,5,"诶嘿，脚滑了",54,56,1500,1,50,27542],[51,5,"诶嘿，脚滑了",55,56,3000,1,50,27542],[52,6,"段位大师",57,65,2,1,1000,27542],[53,6,"段位大师",58,65,3,1,1000,27542],[54,6,"段位大师",59,65,4,1,1000,27542],[55,6,"段位大师",60,65,5,1,1000,27542],[56,6,"段位大师",61,65,6,1,1000,27542],[57,6,"段位大师",62,65,7,1,1000,27542],[58,6,"段位大师",63,65,8,1,1000,27542],[59,6,"段位大师",64,65,9,1,1000,27542],[60,7,"小跟班~",66,69,10001,1,200,27542],[61,7,"小跟班~",67,69,10002,1,200,27542],[62,7,"小跟班~",68,69,10003,1,200,27542]];
const CharacterTable:Array<Array<any>> = [["PlayerID","Camp","HeadShotGUID","Life","HP","ATK","ATKCD","Speed","JumpMaxCount","JumpHeight"],["","","","","","","","","",""],[10000,0,19520,0,0,0,2,500,1,150],[10001,1,19523,1,100,100,2,600,1,150],[10002,2,19520,3,100,100,2,500,1,150]];
const DanmuTable:Array<Array<any>> = [["Id","Content"],["","Language"],[1001,"Danmu_Content_1001"],[1002,"Danmu_Content_1002"],[1003,"Danmu_Content_1003"],[1004,"Danmu_Content_1004"],[1005,"Danmu_Content_1005"],[1006,"Danmu_Content_1006"],[1007,"Danmu_Content_1007"],[1008,"Danmu_Content_1008"],[1009,"Danmu_Content_1009"],[1010,"Danmu_Content_1010"],[1011,"Danmu_Content_1011"],[1012,"Danmu_Content_1012"],[1013,"Danmu_Content_1013"],[1014,"Danmu_Content_1014"]];
const DanTable:Array<Array<any>> = [["Id","Dan","NameGuid","DanGuid","ScoreMin","ScoreMax"],["","","","","",""],[1,"骑士",27235,27235,0,420],[2,"勋爵",27296,27296,420,840],[3,"子爵",27163,27163,840,1680],[4,"伯爵",27221,27221,1680,2540],[5,"侯爵",27349,27349,2540,4200],[6,"公爵",27135,27135,4200,5600],[7,"大主教",27264,27264,5600,7000],[8,"教皇",27129,27129,7000,8400],[9,"国王",27261,27261,8400]];
const EffectsTable:Array<Array<any>> = [["EffectID","EffectName","DamageSort","Damage","VFXGuid","SoundGuid","PVFXGuid","PSoundGuid","ActionGuid","PMoveMax","SpeedVar","Jump","LifeVar","UIVar","Duration","DelayTime"],["","","","","","","","","","","","","","","",""],[10000,"空白",null,null,null,null,null,null,null,null,null,null,null,""],[10001,"伤害100/次",0,100,null,null,null,null,null,null,null,null,null,""],[10002,"伤害80/次",0,80,null,null,null,null,null,null,null,null,null,""],[10003,"伤害50/次",0,50,null,null,null,null,null,null,null,null,null,""],[10004,"伤害50/秒",1,50,null,null,null,null,null,null,null,null,null,""],[10005,"伤害20/秒",1,20,null,null,null,null,null,null,null,null,null,""],[10006,"伤害10/秒",1,10,null,null,null,null,null,null,null,null,null,""],[10007,"加速50％",null,null,null,null,7775,null,null,null,150,null,null,"",8],[10008,"减速40％",null,null,null,null,4399,null,null,null,40,null,null,"",8],[10009,"三段跳",null,null,null,null,24979,null,null,null,null,null,null,"",20],[10010,"墨汁UI",null,null,null,null,null,null,null,null,null,null,null,"",7],[10011,"回血20/秒",1,-20,null,null,13621,null,null,null,null,null,null,"",5],[10012,"眩晕5秒",null,null,null,null,7745,null,14534,null,null,null,null,"",5],[10013,"卡克偷取",null,null,null,null,7743,null,null,null,null,null,null,"",2],[10014,"跳舞动作1",null,null,null,null,4368,21137,14497,null,null,null,null,"",8],[10015,"龙卷风落地死亡",0,100,null,null,null,null,null,null,null,null,null,"",null,5.6],[10016,"伤害20/次",0,20,null,null,null,null,null,null,null,null,null,""],[10017,"黑暗料理特效",null,null,null,null,13621,null,null,null,null,null,null,"",3],[10018,"伤害80/秒",1,80,null,null,null,null,null,null,null,null,null,""],[11000,"宠物移动速度增益",null,null,null,null,null,null,null,null,105,null,null,""],[12000,"宠物跳跃高度增益",null,null,null,null,null,null,null,null,null,110,null,""],[13000,"宠物生命条数增加",null,null,null,null,null,null,null,null,null,null,1,""]];
const EventTable:Array<Array<any>> = [["ID","ReleID","TabType","AtlasName","AtlasImgUp","AtlasImgDown","Atlasexplain","UseTips","Reward"],["","","","","","","","",""],[10001,10001,0,"炸弹",27661,27132,"使用后，立刻在当前位置上放一颗炸弹，延迟2秒后，炸弹位置播放爆炸特效，同时对炸弹周围一定范围内（触发器）的所有玩家造成大量伤害（80），将范围内玩家炸飞，自己也可以受到伤害","炸弹有延迟，记得提前使用！",100],[10002,10002,0,"加速药水",27660,27166,"加速50％，持续10秒","偷偷用道具，超过其他人！",100],[10003,10003,0,"轻盈羽毛",27682,27131,"可以进行三段跳，持续15秒","跳得更高，看得更远！可以越过部分陷阱哦~",100],[10004,10004,0,"蛇的毒液",27674,27292,"雇佣三头蛇对当前所有排名在自己前面的玩家释放毒液，并令其减速60％，持续5秒","在其他玩家在前面时，可以偷偷使用道具超过他哦！当自己排名第一时，无法使用",100],[10005,10005,0,"波吉的料理",27636,27249,"使用后，邀请当前所有排名在自己前面的玩家品尝波吉的料理，品尝到波吉的料理的玩家视野被遮挡，","遮盖其他人视野，偷偷超过他们！当自己排名第一时，无法使用！",100],[10006,10006,0,"修女的祝福",27677,27248,"使用后，得到修女的祝福，每秒少量回血（20），持续5秒","满血可以使用，同样显示特效\n不会增加命的条数，仅能回复生命值",100],[10007,10007,0,"魔神的祝福",27651,27262,"使用后，损失自己50生命值，使其他所有王子，眩晕5秒无法移动","有眩晕效果哦~",100],[10008,10008,0,"雇佣卡克",27652,27223,"使用后，将偷取到当前排名在自己前面的玩家手中的一个道具，同时被偷取的玩家该道具消失；"," 当自己排名第一时，无法使用\n当前排所有玩家都没有道具时，可以雇佣卡克，但偷不到道具",100],[10009,10009,0,"你要跳舞吗？",27638,27119,"使用后，使除自己外的其他所有王子，开始跳舞，跳舞期间无法移动、跳跃、攻击","你你你你要跳舞嘛~",100],[10010,10001,1,"尖刺陷阱",28469,29094,"（1）关闭状态 尖刺及触发器处于地面下，不会对玩家造成伤害\n（2）开启状态 尖刺及触发器从地面刺出，被刺到的玩家会减少一颗心，并回到上一个检查点，尖刺在3秒后自动下降回原位\n（3）按钮CD：6S ","突然出现的尖刺，不小心就会被贯穿掉身体",100],[10011,10003,1,"炸药桶堆",28468,28468,"（1）炸药桶爆炸，陷阱范围内玩家受到80伤害，并被炸飞 \n（2）按钮CD：一次性陷阱，只可开启一次","威力很大的炸药桶，大概是会被炸飞的那种",100],[10012,10006,1,"搅碎机",29242,29087,"（1）刀片高速旋转，玩家受到60伤害\n（2）按钮CD：3S ","只要我跑得快，就不会被发现！",100],[10013,10008,1,"旋转飞轮",29236,29091,"（1）沿道路水平方向从左向右来回移动，飞镖自身保持旋转，对触碰到的玩家每次造成20伤害，并使玩家移动速度降低40％，持续8秒\n（2）按钮CD：8S","Ninja！古くて神秘的な東方秘術！",100],[10014,10009,1,"龙卷风陷阱",29299,29090,"（1）龙卷风范围内的所有角色被弹飞，角色落地会扣100血，直接减少一颗心，1秒后陷阱自动关闭\n（2）按钮CD：3S ","不知道什么时候会突然把人弹起来的装置，万一能够弹到前面去呢？",100],[10015,10010,1,"电疗泳池",29181,29296,"（1）通电的水池中飘浮着一些需要跳跃才能够通过的平台，如果玩家掉落到水中，损失一颗心，并重置玩家位置到上一个检查点。开启后，飘浮的平台开始沿路点移动，此时玩家掉落水中，仍旧会损失一颗心，并重置回上一个检查点 \n（2）按钮CD：一次性陷阱，只可开启一次","是时候展示一下我的高端跳跃技巧了！",100],[10016,10012,1,"摆锤陷阱",29167,29086,"（1）摆锤持续摆动，玩家进入范围，受到50伤害；如果玩家掉落，则重置玩家位置到上一个检查点\n（2）按钮CD：场景内持续开启陷阱","挂在头顶上就像个装饰物一样，似乎没什么威力？",100],[10017,10013,1,"抉择之路",29082,29232,"（1）透明玻璃桥，玩家必须正确分辨出一般玻璃和强化玻璃,若踩到一般玻璃就会掉落,损失一颗心，并重置玩家位置到上一个检查点，一路踩到强化玻璃才能过关。\n（2）类型：场景内持续开启陷阱","走左边这块还是走右边这块？这是个问题。",100]];
const FireTrapTable:Array<Array<any>> = [["GroupID","Group","Duration","EffectID","Blanking"],["","","","",""],[10001,[3,6,9,14,17],2,10003,2],[10002,[2,5,13,15,16],2,10003,2],[10003,[1,4,12,18,19],2,10003,2],[10004,[10,11,12,14,17],3,10002,1.5],[10005,[3,6,1,4,7,8,15,16],3,10002,1.5],[10006,[9,10,11,12,13,18,19],2,10002,1.5]];
const IntroduceTable:Array<Array<any>> = [["ID","TeamName","IntroduceImg"],["","",""],[10001,0,27938],[10002,0,28309],[10003,1,27899],[10004,1,28341]];
const LanguageTable:Array<Array<any>> = [["ID","Name","Value","Value_E","Value_J"],["","Key|ReadByName","MainLanguage","ChildLanguage","ChildLanguage"],[1001,"Danmu_Content_1001","这也太难了","bomb","爆弾"],[1002,"Danmu_Content_1002","等我到终点！","Swiftness Potion","かそくやく"],[1003,"Danmu_Content_1003","救命啊","Light feather","しなやかな羽根"],[1004,"Danmu_Content_1004","就这？","Snake venom","ヘビの毒液"],[1005,"Danmu_Content_1005","别放弃！","Bogey's cuisine","波吉の料理"],[1006,"Danmu_Content_1006","好气！","Nun's blessing","修道女の祝福"],[1007,"Danmu_Content_1007","太过分啦！","aaa",""],[1008,"Danmu_Content_1008","怎么做到的？","bbb",""],[1009,"Danmu_Content_1009","一蹦三尺高","bccc",""],[1010,"Danmu_Content_1010","菜！","jmjm",""],[1011,"Danmu_Content_1011","虎啊虎啊","jmjmj,",""],[1012,"Danmu_Content_1012","新春快乐","ppppp",""],[1013,"Danmu_Content_1013","我不信你能过来","uuuuuu",""],[1014,"Danmu_Content_1014","也不难呀","rewre",""]];
const LevelTable:Array<Array<any>> = [["id","Level","ExpMin","ExpMax"],["","","",""],[1,1,0,200],[2,2,200,700],[3,3,700,1600],[4,4,1600,3700],[5,5,3700,5600],[6,6,5600,6700],[7,7,6700,9200],[8,8,9200,12100],[9,9,12100,15400],[10,10,15400,23200],[11,11,23200,32600],[12,12,32600,43600],[13,13,43600,53000],[14,14,53000,63000],[15,15,63000,75000],[16,16,75000,93000],[17,17,93000,100000],[18,18,100000,123200],[19,19,123200,137900],[20,20,137900,148600],[21,21,148600,153000],[22,22,153000,168000],[23,23,168000,183000],[24,24,183000,200000],[25,25,200000,218200],[26,26,218200,230000],[27,27,230000,243000],[28,28,243000,253000],[29,29,253000,283000],[30,30,283000,"null"]];
const LodaingTable:Array<Array<any>> = [["TipID","Tips","TipWeight"],["","",""],[10001,"国王正在准备中，要小心哦！ ",25],[10002,"尽快登顶，国王在那里等你 ",25],[10003,"拾取道具会有惊喜哦 ",25],[10004,"可以使用道具阻拦竞争者 ",25]];
const PersonTable:Array<Array<any>> = [["PersonID","PersonName","FaceGUID","HairGUID","BodyGUID","PictureGUID"],["","","","","",""],[10001,0,null,null,15660,27476],[10002,1,5259,8434,15652,27453],[10003,2,8378,8438,15606,27490]];
const PetsTable:Array<Array<any>> = [["Petid","PetName","PetIcon","PetPhoto","PetModle","PetVFXGUID","EffectID","PetSpeed","PetDiscription","PetSkillIcon","PetSkill1","PetSkill2","PetSkill3","UnlockSession"],["","","","","","","","","","","","","",""],[10001,"机器人",27503,27503,"15564F754F57250A69DB65B4F730A098",4399,[11000,10000,10000],30,"可爱的机器人",[13472,13453,13453],"移动速度提升5％","无","无",1],[10002,"小章鱼",27471,27471,"3D72FE46428D4BEFF066DF8A8AF4A4D8",4399,[11000,12000,10000],35,"可爱的章鱼",[13472,13451,13453],"移动速度提升5％","跳跃高度提升10％","无",1],[10003,"卡克",27169,27169,"79CFBFB04FAB7FAF05391593A1139764",4399,[11000,12000,13000],40,"可爱的卡克",[13472,13451,13465],"移动速度提升5％","跳跃高度提升10％","增加一颗心",1]];
const PropsGenerateTable:Array<Array<any>> = [["CubeID","CubeGUID","Generate","Weight","PSGUID"],["","","","",""],[1,"A36E6BBC444E02D63B862892DE5D1F46",[10001,10002,10003,10004,10005,10006,10007,10008,10009],[2,2,2,1,1,2,2,1,2],"33AE27394DFE7FA28AC0B79CBB12F06F"],[2,"507BAB5446C2F4EE3AD91B8D751E7F80",[10001,10002,10003,10004,10005,10006,10007,10008,10009],[2,2,2,1,1,2,2,1,2],"E35AD00F43D2A415F947FBBA4B5B0AF3"],[3,"7813A4F345AD36FCCFF3049E9349090D",[10001,10002,10003,10004,10005,10006,10007,10008,10009],[2,2,2,1,1,2,2,1,2],"4E4833E24AEE74D754622EB3971BA32D"]];
const PropsTable:Array<Array<any>> = [["PropID","PropName","IconGUID","ModelGUID","EffectID","TipID","GenerateModleGUID"],["","","","","","",""],[10001,"炸弹（放下一颗炸弹，延时爆炸）",27132,7866,[10000,10002],null,"978D6A9743CDE14AC3D7338A3B81B7B7"],[10002,"加速药水（提升移动速度）",27166,null,[10000,10007],null,"775F18D2409A62C3796862AADE09851B"],[10003,"轻盈羽毛（三段跳）",27131,null,[10000,10009],null,"85F3934144D37B05FB765F8A030B6346"],[10004,"蛇的毒液（使前面的王子减速）",27292,null,[10000,10008],null,"F1CD581D40052796C08B99ABB09B6DC8"],[10005,"波吉的料理（使前面的王子短暂失去视野）",27249,null,[10010,10017],null,"29FE9B78481A142C2B8190BE20C8AE2A"],[10006,"修女的祝福（回血，但不能恢复心）",27248,null,[10000,10011],null,"0DF066624E4522D6A5EE8E915093A83A"],[10007,"魔神的祝福（自己扣血，使其他王子眩晕）",27262,null,[10003,10012],null,"8E7C59314F287B7A2A4294850AD0D5AE"],[10008,"雇佣卡克（偷取前面的人的道具）",27223,null,[10000,10013],null,"EA89B322452240D4C85BB9B14D01F37C"],[10009,"你要跳舞吗（使其他王子跳舞）",27119,null,[10000,10014],null,"16507FEA4F586EE66941A0B643274479"]];
const ShopItemTable:Array<Array<any>> = [["ID","Name","ModelGuid","Type","Description","CoinType","Price","IconGuid","RabbetPart","Scale","Position","Rotation","HaveItem","Weight","IsVisible","LimitBuy","PSGUID"],["","","","","","","","","","","","","","","","",""],[1,"雛菊芽",1791,1,"null",0,3000,25671,1,new Type.Vector(0.2,0.2,0.2),new Type.Vector(0,0,20),new Type.Vector(0,0,180),null,2,1,1],[2,"牡丹芽",1793,1,"null",0,2000,25537,1,new Type.Vector(0.2,0.2,0.2),new Type.Vector(0,0,20),new Type.Vector(0,0,180),null,2,1,1],[3,"笑臉面具",1962,2,"null",0,5000,19971,5,new Type.Vector(0.4,0.4,0.4),new Type.Vector(-1,0,0.5),new Type.Vector(-8,0,-90),null,2,1,1],[4,"火男面具",1963,2,"null",0,5000,19970,5,new Type.Vector(0.4,0.4,0.4),new Type.Vector( -2,0,1),new Type.Vector(-8,0,-90),null,2,1,1],[5,"快樂面具",1964,2,"null",0,5000,19893,5,new Type.Vector(0.4,0.4,0.4),new Type.Vector(-1.5,0,0),new Type.Vector(-8,0,-90),null,2,1,1],[6,"天狗面具",1965,2,"null",0,5000,19935,5,new Type.Vector(0.45,0.45,0.45),new Type.Vector( -2,0,0),new Type.Vector(-10,0,-90),null,2,1,1],[7,"非洲菊芽",2146,1,"null",0,2000,25656,1,new Type.Vector(0.2,0.2,0.2),new Type.Vector(0,0,20),new Type.Vector(0,0,180),null,2,1,1],[8,"木槿花芽",2147,1,"null",0,3000,25619,1,new Type.Vector(0.2,0.2,0.2),new Type.Vector(0,0,20),new Type.Vector(0,0,180),null,2,1,1],[9,"向日葵芽",2282,1,"null",0,1000,25611,1,new Type.Vector(0.2,0.2,0.2),new Type.Vector(0,0,20),new Type.Vector(0,0,180),null,1,1,1],[10,"月見草芽",2390,1,"null",0,500,25535,1,new Type.Vector(0.2,0.2,0.2),new Type.Vector(0,0,20),new Type.Vector(0,0,180),null,1,1,1],[11,"迷你平底鍋",4269,4,"null",0,4000,19681,19,new Type.Vector(0.7,0.7,0.7),new Type.Vector(0,-22,10),new Type.Vector(90,150,0),null,2,1,1],[12,"尖的帽子",7143,1,"null",0,1000,25589,1,new Type.Vector(1,1,1),new Type.Vector(0,0,20),new Type.Vector(0,0,0),null,2,1,1],[13,"尖尖的帽子",7145,1,"null",0,1000,25554,1,new Type.Vector(1,1,1),new Type.Vector(0,0,20),new Type.Vector(0,0,0),null,2,1,1],[14,"尖尖尖的帽子",7147,1,"null",0,1000,25561,1,new Type.Vector(1,1,1),new Type.Vector(0,0,20),new Type.Vector(0,0,0),null,2,1,1],[15,"假的針筒",7872,4,"null",0,6000,19716,19,new Type.Vector(1,1,1),new Type.Vector(-18,20,25),new Type.Vector(180,0,0),null,2,1,1],[16,"口罩",13735,2,"null",0,500,19707,7,new Type.Vector(1,1,1),new Type.Vector(-6,0,-4),new Type.Vector(0,0,-90),null,2,1,1],[17,"粉粉蝴蝶結",13739,1,"null",0,1000,19773,1,new Type.Vector(1,1,1),new Type.Vector(0,-10,10),new Type.Vector(10,0,0),null,1,1,1],[18,"粉色墨鏡",13749,2,"null",0,2000,19724,4,new Type.Vector(1,1,1),new Type.Vector(-6,0,-1.5),new Type.Vector(0,0,0),null,2,1,1],[19,"狐狸面具",1976,2,"null",0,2000,13472,5,new Type.Vector(0.4,0.4,0.4),new Type.Vector(-2,0,2.5),new Type.Vector(0,0,-90),null,1,0,1],[20,"吉他",2205,3,"null",0,8000,20078,12,new Type.Vector(0.8,0.8,0.8),new Type.Vector(5,-10,-45),new Type.Vector(15,0,0),null,2,1,1],[21,"南瓜頭",4372,2,"null",0,1500,14263,1,new Type.Vector(0.25,0.25,0.25),new Type.Vector(0,0,0),new Type.Vector(0,0,0),null,1,1,1],[22,"高檔平底鍋",8554,4,"null",0,1500,20072,19,new Type.Vector(0.6,0.6,0.6),new Type.Vector(-15,-22,10),new Type.Vector(90,80,0),null,1,1,1],[23,"初始剑",20846,7,"null",0,0,19660,16,new Type.Vector(0.8,0.8,0.8),new Type.Vector(2.5,0,105),new Type.Vector(0,180,0),null,0,1,1,20508],[24,"勇者之剑",20808,7,"null",0,5000,19818,16,new Type.Vector(0.8,0.8,0.8),new Type.Vector(2.5,0,105),new Type.Vector(0,180,0),null,0,1,1,7784],[25,"屠龙者",20988,7,"null",0,15000,19787,16,new Type.Vector(0.8,0.8,0.8),new Type.Vector(2.5,0,105),new Type.Vector(0,180,0),null,0,1,1,7827],[26,"猫咪魔法剑",21359,7,"null",0,15000,19752,16,new Type.Vector(0.8,0.8,0.8),new Type.Vector(2.5,0,90),new Type.Vector(0,180,0),null,0,1,1,7810],[27,"米迦勒之刃",20643,7,"null",0,1500,19665,16,new Type.Vector(0.8,0.8,0.8),new Type.Vector(2.5,0,105),new Type.Vector(0,180,0),null,0,1,1,20381],[28,"路西法之刃",21002,7,"null",0,1500,19721,16,new Type.Vector(0.8,0.8,0.8),new Type.Vector(2.5,0,105),new Type.Vector(0,180,0),null,0,1,1,7790]];
const SwimPoolTable:Array<Array<any>> = [["TrapID","LowTem","HighTem","Heat","Cool","KeepTime","SprayGUID","SprayScal","SwimSound","FirstTem","SecondTem","ThirdTem"],["","","","","","","","","","","",""],[11000,20,100,4,1,2,27698,[0.7,0.7,0.7],14931,50,80,100]];
const TextTable:Array<Array<any>> = [["Id","Content"],["",""],[1,"初出茅庐"],[2,"历经风雨"],[3,"见多识广"],[4,"势如破竹"],[5,"高阶大师"],[6,"不负成名"],[7,"无畏之心"],[8,"破晓利刃"],[9,"剑与鸣鸟"],[10,"排名巨兽"],[11,"最高杰作"],[12,"无他，唯手熟尔"],[13,"等级达到{0}级"],[14,"初次体验❤"],[15,"一回生两回熟"],[16,"有点经验"],[17,"有点上瘾"],[18,"这游戏真好玩"],[19,"我也这么想！"],[20,"积少成多~！"],[21,"老用户"],[22,"对局的艺术"],[23,"百次斩！"],[24,"伴我同行"],[25,"雷霆对局"],[26,"巅峰时刻"],[27,"宇宙级大师"],[28,"再来五百局！"],[29,"对局次数达到{0}次"],[30,"小钱钱飞走了"],[31,"身外之物"],[32,"老板大度"],[33,"挥金如土"],[34,"谈钱太俗"],[35,"商会感谢奖"],[36,"大手笔"],[37,"您是股东"],[38,"花费金币{0}"],[39,"小心，刀很快哦"],[40,"饮血剑！"],[41,"雁过无痕"],[42,"初级杀手"],[43,"无影手"],[44,"弑君者！"],[45,"局内击杀国王{0}次"],[46,"危"],[47,"有点小失误"],[48,"加油！"],[49,"盖亚！"],[50,"菜！"],[51,"真菜！"],[52,"雀食不行"],[53,"菜也有奖励呢"],[54,"还能怎么鼓励你呢？"],[55,"手机给我，我替你玩"],[56,"局内死亡{0}次"],[57,"恭喜勋爵"],[58,"恭喜子爵"],[59,"恭喜伯爵"],[60,"恭喜侯爵"],[61,"恭喜公爵"],[62,"恭喜大主教"],[63,"恭喜教皇"],[64,"恭喜国王"],[65,"段位达到{0}"],[66,"机器人的拥抱"],[67,"章鱼小丸子"],[68,"超可爱的卡克！"],[69,"获得宠物{0}"]];
const TipsTable:Array<Array<any>> = [["TipID","TipType","Tip","Ascription"],["","","",""],[11001,0,"进入大厅","大厅界面11XXX"],[11002,0,"{0}解锁{1}成就获得10个钻石","大厅界面"],[11003,0,"排行榜更新了 快去看看吧！","大厅界面"],[11004,1,"{0}成功解锁骑士","大厅界面"],[11005,0,"比赛即将开始","大厅界面"],[11006,1,"{0}成为新的国王","大厅界面"],[11007,1,"{0}保住了王位！","大厅界面"],[11008,1,"{0}满血通关 成为新的国王！","大厅界面"],[12001,0,"选择一个喜欢的觉得角色吧！","初选角色12XXX"],[13001,0,"跟随成功！","宠物界面13XXX"],[13002,0,"休息一下~","宠物界面"],[13003,0,"已经在休息了~","宠物界面"],[13004,0,"解锁成功！","宠物界面"],[13005,0,"还不符合领养条件！","宠物界面"],[13006,0,"已经拥有了！","宠物界面"],[13007,2,"*当前已完成{0}场对局！","宠物界面"],[13008,2,"达成解锁条件-完成{0}场对局获得","宠物界面"],[14001,0,"获得了{0}！","局内对局（王子/使用道具）14XXX"],[14002,0,"你被炸弹炸到了！","局内对局（王子/使用道具）"],[14003,0,"芜湖！加速！","局内对局（王子/使用道具）"],[14004,0,"三段跳！","局内对局（王子/使用道具）"],[14005,0,"糟糕！有毒！","局内对局（王子/使用道具）"],[14006,0,"魔神降临","局内对局（王子/使用道具）"],[14007,0,"偷到了{0}！","局内对局（王子/使用道具）"],[14008,0,"道具被偷走了！","局内对局（王子/使用道具）"],[14009,0,"前面没有可以偷取的道具了","局内对局（王子/使用道具）"],[15001,0,"成功击败{0}个玩家","玩家游戏界面（国王）15XXX"],[15002,0,"还剩三个玩家 加油 保住王位！","玩家游戏界面（国王）"],[15003,0,"机关还没准备好哦","玩家游戏界面（国王）"],[16001,0,"解锁成功！获得{1}钻石~","成就16XXX"],[16002,0,"未达成条件 继续加油哦！","成就"],[16003,0,"{0}成就已解锁 快去领取奖励吧！","成就"],[17001,0,"购买成功！","商店17XXX"],[17002,0,"已经拥有 快去穿上吧！","商店"],[17003,0,"已经拥有 快去戴上吧！","商店"],[17004,0,"金币不够 快去努力赚钱吧！","商店"],[17005,0,"已经拥有，再去看看别的商品吧","商店"],[18001,0,"成功解锁{0} 快去领奖励吧~（道具/机关）","图鉴18XXX"],[18002,0,"已经领取过了 请勿重复领取哦","图鉴"],[18003,1,"{0}解锁全部图鉴","图鉴"],[18004,0,"啊哦，下次小心！","角色死亡提示"],[18005,0,"对局已结束，耐心等待一下结果鸭","角色死亡后回到大厅提示"],[18006,2,"王子们，你们在启程后，将遇到重重阻碍。不过，诞生时，每一位王子都被赐予了勇敢之心和守护之心，它们会在你的旅途中，为你抵挡两次致命伤害。\n除此之外，挑战会带来新机遇，看到那个魔方了吗？大胆的撞上去，你会获得一个技能！虽然有些技能也许不是那么好用...\n冲到国王高塔之后，挥舞你手中的长剑吧，战胜那个虚假的国王！\n对了，记得解锁你的宠物，跟它一起走向胜利。\n我们永向王座，绝不认输！","王子阵营匹配大厅提示"],[18007,2,"","国王阵营匹配大厅提示"],[18008,0,"当前没有正在进行的对局哦~","匹配大厅玩家点击观战时没有对局提示"],[18009,0,"获得金币啦~","达成成就获得n个金币时"],[18010,0,"获得钻石啦~","达成成就获得n个钻石时"]];
const TrapsGenerateTable:Array<Array<any>> = [["PitID","Generate","Weight"],["","",""],[1,[10001,10003,10005,10006,10008,10009,10010],[1,1,1,1,1,1,1]],[2,[10001,10003,10005,10006,10008,10009,10010],[1,1,1,1,1,1,1]],[3,[10001,10003,10005,10006,10008,10009,10010],[1,1,1,1,1,1,1]],[4,[10001,10003,10005,10006,10008,10009,10010],[1,1,1,1,1,1,1]],[5,[10001,10003,10005,10006,10008,10009,10010],[1,1,1,1,1,1,1]],[6,[10001,10003,10005,10006,10008,10009,10010],[1,1,1,1,1,1,1]]];
const TrapsTable:Array<Array<any>> = [["TrapID","TrapName","TrapTem","EffectID","TrapSort","MoveDir","MoveV","MoveMax","RotateAxis","RotateV","AngelMax","Time","CD","TipID"],["","","","","","","","","","","","","",""],[10001,"尖刺陷阱","8604149644D993DEB316B5A4F286F4F1",[10000,10001],0,2,280,140,3,0,null,3,10],[10002,"铁板烧陷阱","44461CAA42B10F328F45709FF2601A8E",[10000,10006],0,3,0,null,3,0,null,999,0],[10003,"炸药桶堆","4B49419141991A53549EDCAE250DE670",[10000,10001],0,3,0,null,3,0,null,1,0],[10004,"镜子激光阵","","",0,3,0,null,3,0,null,5,8],[10005,"抽板陷阱","3AFC19284B5B62BD40C900818DF1AE3D",[10000,10001],0,3,0,null,1,180,180,1,10],[10006,"搅碎机","28FE5EAE4B74AFBB1B0E358F35790FF0",[10000,10001],0,3,0,null,1,360,720,2,10],[10007,"飞刀陷阱","","",0,3,0,null,0,180,270,2,5],[10008,"旋转飞轮","294512064A8E74C35F049DB5981F3058",[10016,10008],0,3,35,null,2,360,720,2,10],[10009,"龙卷风陷阱","EF0D11C5405080DF5C31F0B499847790",[10000,10001],0,3,0,null,1,90,45,2,10],[10010,"电疗泳池","5F54DAA3497108C28C1C6FA3DF80097F",[10000,10001],0,3,0,null,3,0,null,999,0],[10011,"沥青陷阱","90A620D04A4EB324AF0D21966E57B069",[10005,10008],1,3,0,null,3,0,null,999],[10012,"摆锤陷阱","",[10000,10001],1,3,0,null,1,90,270,999],[10013,"抉择之路","",[10000,10001],1,3,0,null,3,0,null,999],[10014,"熔岩陷阱","44461CAA42B10F328F45709FF2601A8E",[10004,10007],1,3,0,null,3,0,null,999],[11000,"泳池陷阱","",[10005,10004,10018],0,null,null,null,null,null,null,7,24]];
interface ElementBase{
	ID:number
}
export interface AccountElement extends ElementBase{
 	/**id*/
	Id:number
	/**玩家是否为本局国王，1是，2不是*/
	IfKing:number
	/**玩家排名*/
	Ranking:number
	/**玩家获得分数*/
	GetScore:number
	/**玩家结算时获得经验*/
	GetExp:number
	/**玩家结算时获得金币*/
	GetCoin:number
 } 
export interface AchievementElement extends ElementBase{
 	/**ID*/
	Id:number
	/**页签种类*/
	YQID:number
	/**页签文本*/
	Yeqian:string
	/**成就名称文本在文本表的id*/
	Mingcheng:number
	/**成就内容文本在文本表的id*/
	Text:number
	/**达成成就需要的次数*/
	Data:number
	/**成就奖励类型，1金币，2钻石*/
	Type:number
	/**成就奖励物品个数*/
	DiamondNumber:number
	/**奖励物品icon的guid*/
	IconGuid:number
 } 
export interface CharacterElement extends ElementBase{
 	/**角色ID*/
	PlayerID:number
	/**角色阵营
0：大厅
1：国王
2：王子*/
	Camp:number
	/**头像GUID*/
	HeadShotGUID:number
	/**命的条数*/
	Life:number
	/**每条命的生命值*/
	HP:number
	/**攻击力*/
	ATK:number
	/**攻击间隔
（秒）*/
	ATKCD:number
	/**移动速度*/
	Speed:number
	/**跳跃最大次数*/
	JumpMaxCount:number
	/**跳跃高度*/
	JumpHeight:number
 } 
export interface DanmuElement extends ElementBase{
 	/**Id*/
	Id:number
	/**弹幕内容*/
	Content:string
 } 
export interface DanElement extends ElementBase{
 	/**id*/
	Id:number
	/**段位称号*/
	Dan:string
	/**玩家id处显示的图标guid*/
	NameGuid:number
	/**段位晋升时显示的图标guid*/
	DanGuid:number
	/**对应积分的下限*/
	ScoreMin:number
	/**对应积分的上限*/
	ScoreMax:number
 } 
export interface EffectsElement extends ElementBase{
 	/**效果ID*/
	EffectID:number
	/**效果名称*/
	EffectName:string
	/**伤害类型
（不造成伤害写0）
0：每次伤害
1：每秒伤害*/
	DamageSort:number
	/**伤害*/
	Damage:number
	/**模型播放特效GUID
空：无需播放*/
	VFXGuid:number
	/**模型播放音效GUID
空：无需播放*/
	SoundGuid:number
	/**角色播放特效GUID
空：无需播放*/
	PVFXGuid:number
	/**角色播放音效GUID
空：无需播放*/
	PSoundGuid:number
	/**角色播放动作或姿态GUID
空：无需播放*/
	ActionGuid:number
	/**角色最大位移
空：无需位移*/
	PMoveMax:number
	/**角色移动速度变化
空：无需变化
（百分比）*/
	SpeedVar:number
	/**角色跳跃高度变化
（百分比）*/
	Jump:number
	/**角色生命条数增加数量*/
	LifeVar:number
	/**显示UI的名称
空：无需变化*/
	UIVar:string
	/**效果持续时间*/
	Duration:number
	/**延迟时间*/
	DelayTime:number
 } 
export interface EventElement extends ElementBase{
 	/**id*/
	ID:number
	/**道具序号*/
	ReleID:number
	/**页签类型
0：道具
1：陷阱*/
	TabType:number
	/**图鉴内容名称*/
	AtlasName:string
	/**上方道具图片*/
	AtlasImgUp:number
	/**下方道具图片*/
	AtlasImgDown:number
	/**道具说明*/
	Atlasexplain:string
	/**使用技巧*/
	UseTips:string
	/**奖励内容（金币）*/
	Reward:number
 } 
export interface FireTrapElement extends ElementBase{
 	/**执行组ID*/
	GroupID:number
	/**喷火器组*/
	Group:Array<number>
	/**持续时间*/
	Duration:number
	/**效果ID*/
	EffectID:number
	/**间隔*/
	Blanking:number
 } 
export interface IntroduceElement extends ElementBase{
 	/**角色ID*/
	ID:number
	/**阵营名字
0：王子
1：国王*/
	TeamName:number
	/**介绍图片*/
	IntroduceImg:number
 } 
export interface LanguageElement extends ElementBase{
 	/**id*/
	ID:number
	/**undefined*/
	Name:string
	/**中文*/
	Value:string
 } 
export interface LevelElement extends ElementBase{
 	/**id*/
	id:number
	/**等级*/
	Level:number
	/**所需经验值下限*/
	ExpMin:number
	/**所需经验值上限*/
	ExpMax:number
 } 
export interface LodaingElement extends ElementBase{
 	/**提示序号 */
	TipID:number
	/**提示内容 */
	Tips:string
	/**权重 总和为100 */
	TipWeight:number
 } 
export interface PersonElement extends ElementBase{
 	/**角色ID*/
	PersonID:number
	/**角色名称
0：猫管家 
1：王子         2：公主*/
	PersonName:number
	/**脸部模型GUID */
	FaceGUID:number
	/**头发模型GUID */
	HairGUID:number
	/**身体模型GUID */
	BodyGUID:number
	/**头像GUID */
	PictureGUID:number
 } 
export interface PetsElement extends ElementBase{
 	/**宠物序号*/
	Petid:number
	/**宠物名称*/
	PetName:string
	/**宠物头像GUID*/
	PetIcon:number
	/**宠物展示图GUID*/
	PetPhoto:number
	/**宠物模型GUID*/
	PetModle:string
	/**宠物特效GUID*/
	PetVFXGUID:number
	/**对角色的效果ID*/
	EffectID:Array<number>
	/**宠物移动速度*/
	PetSpeed:number
	/**宠物描述*/
	PetDiscription:string
	/**宠物技能图标GUID*/
	PetSkillIcon:Array<number>
	/**宠物技能1描述*/
	PetSkill1:string
	/**宠物技能2描述*/
	PetSkill2:string
	/**宠物技能3描述*/
	PetSkill3:string
	/**宠物解锁所需场次*/
	UnlockSession:number
 } 
export interface PropsGenerateElement extends ElementBase{
 	/**魔方ID*/
	CubeID:number
	/**魔方触发器GUID*/
	CubeGUID:string
	/**允许生成的道具ID*/
	Generate:Array<number>
	/**生成道具权重*/
	Weight:Array<number>
	/**特效GUID*/
	PSGUID:string
 } 
export interface PropsElement extends ElementBase{
 	/**道具序号*/
	PropID:number
	/**道具名称*/
	PropName:string
	/**道具图标GUID*/
	IconGUID:number
	/**道具模型GUID
*/
	ModelGUID:number
	/**对角色的效果ID*/
	EffectID:Array<number>
	/**文本提示ID*/
	TipID:number
	/**生成道具模型GUID*/
	GenerateModleGUID:string
 } 
export interface ShopItemElement extends ElementBase{
 	/**物品序号*/
	ID:number
	/**物品名称*/
	Name:string
	/**模型资源GUID*/
	ModelGuid:number
	/**所属类别
0：礼包
1：头部
2：面部
3：背部
4：腰部
5：货币
6：碎片
7：武器*/
	Type:number
	/**物品描述
*无描述则空置*/
	Description:string
	/**货币种类
0：金币
1：钻石*/
	CoinType:number
	/**物品价格*/
	Price:number
	/**物品图标GUID */
	IconGuid:number
	/**使用插槽部位
0：头发
1：脸部
2：头部左侧
3：头部右侧
4：眼镜
5：眼睛
6：面部装饰
7：嘴部
8：左肩部
9：右肩部
10：左手手套
11：右手手套
12：背部装饰
13：左背
14：右背
15：左手
16：右手
17：左脚
18：右脚
19：臀部
20：头顶光圈
21：头顶标题
22：聊天框
23：根节点 */
	RabbetPart:number
	/**缩放   */
	Scale:Type.Vector
	/**位移  */
	Position:Type.Vector
	/**旋转  */
	Rotation:Type.Vector
	/**包含物品
*礼包填写*/
	HaveItem:Array<number>
	/**权重*/
	Weight:number
	/**是否显示
0：不显示
1：显示 */
	IsVisible:number
	/**限制购买次数
0：无限制*/
	LimitBuy:number
	/**特效GUID*/
	PSGUID:number
 } 
export interface SwimPoolElement extends ElementBase{
 	/**陷阱ID*/
	TrapID:number
	/**最低温度*/
	LowTem:number
	/**最高温度*/
	HighTem:number
	/**升温时间*/
	Heat:number
	/**降温时间*/
	Cool:number
	/**最高温度保持时间*/
	KeepTime:number
	/**水花特效GUID*/
	SprayGUID:number
	/**特效大小缩放*/
	SprayScal:Array<number>
	/**游泳水声GUID*/
	SwimSound:number
	/**第一节点温度*/
	FirstTem:number
	/**第二节点温度*/
	SecondTem:number
	/**第三节点温度*/
	ThirdTem:number
 } 
export interface TextElement extends ElementBase{
 	/**Id*/
	Id:number
	/**内容*/
	Content:string
 } 
export interface TipsElement extends ElementBase{
 	/**文本ID*/
	TipID:number
	/**提示类型
0：飘字效果
1：走马灯效果
2：固定文本*/
	TipType:number
	/**文本内容*/
	Tip:string
	/**分类*/
	Ascription:string
 } 
export interface TrapsGenerateElement extends ElementBase{
 	/**坑位ID*/
	PitID:number
	/**允许生成的陷阱ID*/
	Generate:Array<number>
	/**生成权重
*/
	Weight:Array<number>
 } 
export interface TrapsElement extends ElementBase{
 	/**陷阱序号*/
	TrapID:number
	/**陷阱名称*/
	TrapName:string
	/**陷阱模型GUID*/
	TrapTem:string
	/**对角色影响效果ID
空：不需要角色效果*/
	EffectID:Array<number>
	/**陷阱类型
0：操作型
1：固定型*/
	TrapSort:number
	/**移动方向
（无需移动统一写3）
0：X
1：Y
2：Z
3：不控制*/
	MoveDir:number
	/**移动速度
（移动时间=最大移动距离/移动速度）*/
	MoveV:number
	/**最大移动距离*/
	MoveMax:number
	/**旋转轴
（无需旋转统一写3）
0：X
1：Y
2：Z
3：不控制*/
	RotateAxis:number
	/**旋转速度
*/
	RotateV:number
	/**最大旋转角度*/
	AngelMax:number
	/**持续时间*/
	Time:number
	/**按钮冷却时间
0：无限，不再开放按钮*/
	CD:number
	/**文本提示ID*/
	TipID:number
 } 

class Config<T extends ElementBase>{
	private static readonly Tag_Key:string = 'Key';//读取键(除了ID之外的别名，带key的字段必须是string类型)
	private static readonly Tag_Language:string = 'Language';//关联语言表的id或key(如果有这个tag，导表工具要把数据生成为string类型，因为会自动进行值的转换)
	private static readonly Tag_MainLanguage:string = 'MainLanguage';//主语言tag
	private static readonly Tag_ChildLanguage:string = 'ChildLanguage';//子语言tag

	private readonly ElementArr:Array<T> = [];
	private readonly ElementMap:Map<number, T>  = new Map<number, T>();
	private readonly KeyMap:Map<string, number> = new Map();

	public constructor(excelData:Array<Array<any>>, languageIndex:number){
		let headerLine:number = 2;//表头的行数
		this.ElementArr = new Array(excelData.length - headerLine);
		
		for(let i = 0; i < this.ElementArr.length; i++){
			this.ElementArr[i] = {} as T
		}
		let column = excelData[0].length;//列数
		for(let j = 0; j < column; j++){//遍历各列
			let name:string = excelData[0][j];
			let tags:Array<string> = excelData[1][j].split('|');
			if(tags.includes(Config.Tag_ChildLanguage)) continue;
			let jOffect:number = 0;//列偏移量
			if(tags.includes(Config.Tag_MainLanguage)){
				let index = j + languageIndex;
				let targetTags:Array<string> = excelData[1][index].split('|');
				if(index < column && targetTags.includes(Config.Tag_ChildLanguage)){
					jOffect = languageIndex;
				}
			}
			let hasTag_Key:boolean = tags.includes(Config.Tag_Key);
			let hasTag_Language:boolean = tags.includes(Config.Tag_Language);
			for(let i = 0; i < this.ElementArr.length; i++){
				let ele = this.ElementArr[i];
				let value = excelData[i + headerLine][j + jOffect];
				if(j == 0){//ID
					this.ElementMap.set(value, ele);
				}else{
					if(hasTag_Key){
						this.KeyMap.set(value, excelData[i + headerLine][0]);
					}
					if(hasTag_Language){
						value = GameConfig.GetLanguage(value);
					}
				}
				ele[name] = value;
			}
		}
	}
	/**根据id获取一个元素*/
	public GetElement(id:number|string): T {
		let ele = this.ElementMap.get(Number(id)) || this.ElementMap.get(this.KeyMap.get(String(id)));
		if(ele == null){
			console.error("配置表中找不到元素 id:" + id);
		}
		return ele;
	}
	/**根据key,value查找一个元素*/
	public FindElement(key:string, value:any): T{
		for(let i = 0; i < this.ElementArr.length; i++){
			if(this.ElementArr[i][key] == value){
				return this.ElementArr[i];
			}
		}
	}
	/**获取所有元素*/
	public GetAllElement():Array<T>{
		return this.ElementArr;
	}
}
class AccountConfig extends Config<AccountElement>{}
class AchievementConfig extends Config<AchievementElement>{}
class CharacterConfig extends Config<CharacterElement>{}
class DanmuConfig extends Config<DanmuElement>{}
class DanConfig extends Config<DanElement>{}
class EffectsConfig extends Config<EffectsElement>{}
class EventConfig extends Config<EventElement>{}
class FireTrapConfig extends Config<FireTrapElement>{}
class IntroduceConfig extends Config<IntroduceElement>{}
class LanguageConfig extends Config<LanguageElement>{
	get Danmu_Content_1001():LanguageElement{return this.GetElement(1001)};
	get Danmu_Content_1002():LanguageElement{return this.GetElement(1002)};
	get Danmu_Content_1003():LanguageElement{return this.GetElement(1003)};
	get Danmu_Content_1004():LanguageElement{return this.GetElement(1004)};
	get Danmu_Content_1005():LanguageElement{return this.GetElement(1005)};
	get Danmu_Content_1006():LanguageElement{return this.GetElement(1006)};
	get Danmu_Content_1007():LanguageElement{return this.GetElement(1007)};
	get Danmu_Content_1008():LanguageElement{return this.GetElement(1008)};
	get Danmu_Content_1009():LanguageElement{return this.GetElement(1009)};
	get Danmu_Content_1010():LanguageElement{return this.GetElement(1010)};
	get Danmu_Content_1011():LanguageElement{return this.GetElement(1011)};
	get Danmu_Content_1012():LanguageElement{return this.GetElement(1012)};
	get Danmu_Content_1013():LanguageElement{return this.GetElement(1013)};
	get Danmu_Content_1014():LanguageElement{return this.GetElement(1014)};
}
class LevelConfig extends Config<LevelElement>{}
class LodaingConfig extends Config<LodaingElement>{}
class PersonConfig extends Config<PersonElement>{}
class PetsConfig extends Config<PetsElement>{}
class PropsGenerateConfig extends Config<PropsGenerateElement>{}
class PropsConfig extends Config<PropsElement>{}
class ShopItemConfig extends Config<ShopItemElement>{}
class SwimPoolConfig extends Config<SwimPoolElement>{}
class TextConfig extends Config<TextElement>{}
class TipsConfig extends Config<TipsElement>{}
class TrapsGenerateConfig extends Config<TrapsGenerateElement>{}
class TrapsConfig extends Config<TrapsElement>{}

export class GameConfig{
	private static ConfigMap:Map<string, Config<ElementBase>> = new Map();
	private static LanguageIndex:number = 0;//语言索引
	public static GetLanguage:(key:string|number)=>string;
	public static InitLanguage(LanguageIndex:number, GetLanguage:(key:string|number)=>string){
		this.LanguageIndex = LanguageIndex;
		this.GetLanguage = GetLanguage;
	}
	private static GetConfig<T extends Config<ElementBase>>(c:{new(excelData:Array<Array<any>>, languageIndex:number):T}):T{
		return this.ConfigMap.get(c.name) as T;
	}
	private static RegisterConfig<T extends Config<ElementBase>>(config:T){
		this.ConfigMap.set(config.constructor.name, config);
		return config;
	}
	public static get Account():AccountConfig{ return this.GetConfig(AccountConfig) || this.RegisterConfig(new AccountConfig(AccountTable, this.LanguageIndex)); }
	public static get Achievement():AchievementConfig{ return this.GetConfig(AchievementConfig) || this.RegisterConfig(new AchievementConfig(AchievementTable, this.LanguageIndex)); }
	public static get Character():CharacterConfig{ return this.GetConfig(CharacterConfig) || this.RegisterConfig(new CharacterConfig(CharacterTable, this.LanguageIndex)); }
	public static get Danmu():DanmuConfig{ return this.GetConfig(DanmuConfig) || this.RegisterConfig(new DanmuConfig(DanmuTable, this.LanguageIndex)); }
	public static get Dan():DanConfig{ return this.GetConfig(DanConfig) || this.RegisterConfig(new DanConfig(DanTable, this.LanguageIndex)); }
	public static get Effects():EffectsConfig{ return this.GetConfig(EffectsConfig) || this.RegisterConfig(new EffectsConfig(EffectsTable, this.LanguageIndex)); }
	public static get Event():EventConfig{ return this.GetConfig(EventConfig) || this.RegisterConfig(new EventConfig(EventTable, this.LanguageIndex)); }
	public static get FireTrap():FireTrapConfig{ return this.GetConfig(FireTrapConfig) || this.RegisterConfig(new FireTrapConfig(FireTrapTable, this.LanguageIndex)); }
	public static get Introduce():IntroduceConfig{ return this.GetConfig(IntroduceConfig) || this.RegisterConfig(new IntroduceConfig(IntroduceTable, this.LanguageIndex)); }
	public static get Language():LanguageConfig{ return this.GetConfig(LanguageConfig) || this.RegisterConfig(new LanguageConfig(LanguageTable, this.LanguageIndex)); }
	public static get Level():LevelConfig{ return this.GetConfig(LevelConfig) || this.RegisterConfig(new LevelConfig(LevelTable, this.LanguageIndex)); }
	public static get Lodaing():LodaingConfig{ return this.GetConfig(LodaingConfig) || this.RegisterConfig(new LodaingConfig(LodaingTable, this.LanguageIndex)); }
	public static get Person():PersonConfig{ return this.GetConfig(PersonConfig) || this.RegisterConfig(new PersonConfig(PersonTable, this.LanguageIndex)); }
	public static get Pets():PetsConfig{ return this.GetConfig(PetsConfig) || this.RegisterConfig(new PetsConfig(PetsTable, this.LanguageIndex)); }
	public static get PropsGenerate():PropsGenerateConfig{ return this.GetConfig(PropsGenerateConfig) || this.RegisterConfig(new PropsGenerateConfig(PropsGenerateTable, this.LanguageIndex)); }
	public static get Props():PropsConfig{ return this.GetConfig(PropsConfig) || this.RegisterConfig(new PropsConfig(PropsTable, this.LanguageIndex)); }
	public static get ShopItem():ShopItemConfig{ return this.GetConfig(ShopItemConfig) || this.RegisterConfig(new ShopItemConfig(ShopItemTable, this.LanguageIndex)); }
	public static get SwimPool():SwimPoolConfig{ return this.GetConfig(SwimPoolConfig) || this.RegisterConfig(new SwimPoolConfig(SwimPoolTable, this.LanguageIndex)); }
	public static get Text():TextConfig{ return this.GetConfig(TextConfig) || this.RegisterConfig(new TextConfig(TextTable, this.LanguageIndex)); }
	public static get Tips():TipsConfig{ return this.GetConfig(TipsConfig) || this.RegisterConfig(new TipsConfig(TipsTable, this.LanguageIndex)); }
	public static get TrapsGenerate():TrapsGenerateConfig{ return this.GetConfig(TrapsGenerateConfig) || this.RegisterConfig(new TrapsGenerateConfig(TrapsGenerateTable, this.LanguageIndex)); }
	public static get Traps():TrapsConfig{ return this.GetConfig(TrapsConfig) || this.RegisterConfig(new TrapsConfig(TrapsTable, this.LanguageIndex)); }
}