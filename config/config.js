var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Chengxi Hou",
    sex: "male",
    age: "24",
    phone: "13679228178",
    email: "13679228178@qq.com",
    address: "Shaanxi, Xi'an, China",
    qq: "13679228178",
    log: "thejees",
    specialties: "Hosting & Filmmaking",


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
    about: "<p>Hi! I'm Chengxi Hou from China, a hosting and broadcasting graduate from Baoji Arts and Physics University. I'm specialized in hosting, filmmaking and video editing.</p>" +
        "<p>I'm experienced in filmmaking and video editing, and I possess solid professional skills in hosting and voice acting. I'm a passionate and friendly person, who is easy to integrate into a new environment. </p>" +
        "<p>I'm looking forward to get in touch with you!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Photography", 87, "red"],
        ["Video Shooting", 67, "blue"],
        ["Color Mixing", 75, "#1abc9c"],
        ["Directing", 83, "rgba(0,0,0)"],
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
        ["./images/pro-6.png", "https://www.bilibili.com/video/BV13M411B7vA/", "genosse", "A short film about some dark secrets of a student union."]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */

    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2020-04-28", "Joined Bei Ge studio", "Got voted as the chief of Dept. Photography in the second year."],
        ["2020-09-24", "Leading the department completing numorous missions.", "Participated in the K.O. Microfilm-Making competition."],
        ["2021-08-24", "Signed up for volunteering in The 14th National Games", "Was awarded the Outstanding Volunteer Award."],
        ["2022-07-14", "Took internship in a local company", "Succesfully shot two promo video and fullfilled customer's needs."]
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
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
