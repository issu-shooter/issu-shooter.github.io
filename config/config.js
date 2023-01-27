var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "侯晨曦",
    sex: "男",
    age: "19",
    phone: "13679228178",
    email: "13679228178@qq.com",
    address: "现居陕西省西安市",
    qq: "13679228178",
    log: "thejees",
    excpect_work: "Announcer/Filmmaking",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！",
        "苟利国家生死以，岂因祸福避趋之"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "The world is beautiful, see it through your eyes.<br>" +
             "Hello world!<br>" +
             "Hello! I'm Chengxi Hou from Xi'an!<br>" +
             "Nice to meet you!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫侯晨曦，性别男，宝鸡文理学院19级播音主持专业毕业生。我期望的工作岗位是播音主持/影视拍摄/后期剪辑。</p>" +
        "<p>我有着较多的影视拍摄经验，影视拍摄和播音主持基础技能掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同能力强，同时我也具备独立开发的能力，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班或出差等安排</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Photography", 80, "red"],
        ["Video Shooting", 67, "blue"],
        ["Color Mixing", 75, "#1abc9c"],
        ["Directing", 67, "rgba(0,0,0)"],
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Fluent video and picture photography.</li>" +
        "     <li>Experienced in video editing and color adjusting.</li>" +
        "     <li>Socialable and good orgnizational skills.</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "https://www.bilibili.com/video/BV1t24y1z7gX/", "The father", "A short film."],
        ["./images/pro-2.png", "https://www.bilibili.com/video/BV1UT411f7cY/", "Fireworks", "An artistic short video about fireworks"],
        ["./images/pro-3.png", "https://www.bilibili.com/video/BV1k3411X7Tf/", "Our drama club", "A promo for a drama club in my college"],
        ["./images/pro-4.png", "https://www.bilibili.com/video/BV16s4y147wN/", "Korean dance", "A MV featuring our dancing club's members performing korean dance."],
        ["./images/pro-5.png", "https://www.bilibili.com/video/BV1ks4y147VT/", "Baoji", "A promo of the beautiful city Baoji."],
        ["./images/pro-6.png", "https://www.bilibili.com/video/BV13M411B7vA/", "genosse", "A short film about some dark secrets of a student union."],
        ["./images/pro-7.png", "https://www.bilibili.com/video/BV1eT411o7NR/", "A glow on the Horizons", "A documentary made for a local company."],
        ["./images/pro-8.png", "https://www.bilibili.com/video/BV1SR4y1h7d8/", "With power of the role models", "Another documentary made for another local company."]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2022/7/1 — 2022/8/1", "<br>",
            "<p><strong>A documentary of Xi'an Financing Guarantee .Ltd</strong></p>" +
            "<p>I was sent out with one colleague, and shot two documentaries for our clients during the summer in 2022. </p>"
        ],
        ["2020/8/1 — 2021/9/1", "<br>",
            "<p><strong>In Dept. Media and Promo</strong></p>" +
            "<p>I was sent out with one colleague, and shot two documentaries for our clients during the summer in 2022. </p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2021-04-28", "第十二届蓝桥杯大学生A组省三等奖", "大一下学期，我参与第十二届蓝桥杯大学生A组，然比赛一改以往暴力题，半数以上DP，仅取得省级三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
        ["2020-11-14", "2020级南昌大学程序设计正式赛三等奖", "大一上学期，我参与校举办的面向全校程序设计大赛并获得三等奖，"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/Bili.svg", "https://space.bilibili.com/24105388", "My Bilibili Repository"],
        ["./svg/github.svg", "https://github.com/iLU2018", "My Github Repository"],
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.webp",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
