// 區域
const section = [
  { name: '中正區', value: '1' },
  { name: '大同區', value: '2' },
  { name: '中山區', value: '3' },
  { name: '松山區', value: '4' },
  { name: '大安區', value: '5' },
  { name: '萬華區', value: '6' },
  { name: '信義區', value: '7' },
  { name: '士林區', value: '8' },
  { name: '北投區', value: '9' },
  { name: '內湖區', value: '10' },
  { name: '南港區', value: '11' },
  { name: '文山區', value: '12' }
]

const subwayRoute = [
  { pid: '100', sid: '100', name: '文湖線', lat: '25.0416040', lng: '121.5437750', zoom: '13' },
  { pid: '125', sid: '125', name: '淡水信義線', lat: '25.0716410', lng: '121.5201180', zoom: '13' },
  { pid: '195', sid: '195', name: '新北投支線', lat: '25.1369380', lng: '121.5025330', zoom: '15' },
  { pid: '148', sid: '148', name: '松山新店線', lat: '24.9925600', lng: '121.5406310', zoom: '13' },
  { pid: '192', sid: '192', name: '小碧潭支線', lat: '24.9718600', lng: '121.5304100', zoom: '15' },
  { pid: '162', sid: '162', name: '中和新蘆線', lat: '25.0025860', lng: '121.5109880', zoom: '14' },
  { pid: '168', sid: '168', name: '板南線', lat: '25.0234110', lng: '121.4681960', zoom: '14' },
  { pid: '316', sid: '316', name: '淡海輕軌', lat: '25.0234110', lng: '121.4681960', zoom: '14' },
  { pid: '346', sid: '346', name: '環狀線', lat: '25.0044790', lng: '121.4905150', zoom: '14' }
]

const taipei = {}
taipei[100] = [
  {
    pid: '100',
    sid: '101',
    name: '南港展覽館',
    lat: '25.0552650',
    lng: '121.6173590',
    zoom: '16',
    nid: '4257'
  },
  {
    pid: '100',
    sid: '102',
    name: '南港軟體園',
    lat: '25.0595760',
    lng: '121.6159210',
    zoom: '16',
    nid: '4314'
  },
  {
    pid: '100',
    sid: '103',
    name: '東湖',
    lat: '25.0671810',
    lng: '121.6114790',
    zoom: '16',
    nid: '4315'
  },
  {
    pid: '100',
    sid: '104',
    name: '葫洲',
    lat: '25.0727900',
    lng: '121.6070030',
    zoom: '16',
    nid: '4316'
  },
  {
    pid: '100',
    sid: '105',
    name: '大湖公園',
    lat: '25.0837440',
    lng: '121.6023380',
    zoom: '16',
    nid: '4317'
  },
  {
    pid: '100',
    sid: '106',
    name: '內湖',
    lat: '25.0837830',
    lng: '121.5945520',
    zoom: '16',
    nid: '4318'
  },
  {
    pid: '100',
    sid: '107',
    name: '文德',
    lat: '25.0785300',
    lng: '121.5847270',
    zoom: '16',
    nid: '4319'
  },
  {
    pid: '100',
    sid: '108',
    name: '港墘',
    lat: '25.0800440',
    lng: '121.5751010',
    zoom: '16',
    nid: '4320'
  },
  {
    pid: '100',
    sid: '109',
    name: '西湖',
    lat: '25.0821500',
    lng: '121.5671430',
    zoom: '16',
    nid: '4321'
  },
  {
    pid: '100',
    sid: '110',
    name: '劍南路',
    lat: '25.0848000',
    lng: '121.5558750',
    zoom: '16',
    nid: '4282'
  },
  {
    pid: '100',
    sid: '111',
    name: '大直',
    lat: '25.0794920',
    lng: '121.5469110',
    zoom: '16',
    nid: '4323'
  },
  {
    pid: '100',
    sid: '112',
    name: '松山機場',
    lat: '25.0629100',
    lng: '121.5521900',
    zoom: '16',
    nid: '4324'
  },
  {
    pid: '100',
    sid: '113',
    name: '中山國中',
    lat: '25.0608340',
    lng: '121.5441830',
    zoom: '16',
    nid: '4185'
  },
  {
    pid: '100',
    sid: '114',
    name: '南京復興',
    lat: '25.0525280',
    lng: '121.5440670',
    zoom: '16',
    nid: '4186'
  },
  {
    pid: '100',
    sid: '115',
    name: '忠孝復興',
    lat: '25.0416040',
    lng: '121.5437750',
    zoom: '16',
    nid: '4187'
  },
  {
    pid: '100',
    sid: '116',
    name: '大安',
    lat: '25.0329920',
    lng: '121.5435820',
    zoom: '16',
    nid: '4188'
  },
  {
    pid: '100',
    sid: '117',
    name: '科技大樓',
    lat: '25.0261190',
    lng: '121.5434370',
    zoom: '16',
    nid: '4189'
  },
  {
    pid: '100',
    sid: '118',
    name: '六張犁',
    lat: '25.0237870',
    lng: '121.5531280',
    zoom: '16',
    nid: '4190'
  },
  {
    pid: '100',
    sid: '119',
    name: '麟光',
    lat: '25.0185250',
    lng: '121.5587720',
    zoom: '16',
    nid: '4191'
  },
  {
    pid: '100',
    sid: '120',
    name: '辛亥',
    lat: '25.0054780',
    lng: '121.5571030',
    zoom: '16',
    nid: '4192'
  },
  {
    pid: '100',
    sid: '121',
    name: '萬芳醫院',
    lat: '24.9993490',
    lng: '121.5580850',
    zoom: '16',
    nid: '4193'
  },
  {
    pid: '100',
    sid: '122',
    name: '萬芳社區',
    lat: '24.9985620',
    lng: '121.5680980',
    zoom: '16',
    nid: '4194'
  },
  {
    pid: '100',
    sid: '123',
    name: '木柵',
    lat: '24.9982340',
    lng: '121.5731460',
    zoom: '16',
    nid: '4195'
  },
  {
    pid: '100',
    sid: '124',
    name: '動物園',
    lat: '24.9982650',
    lng: '121.5794760',
    zoom: '16',
    nid: '4196'
  }
]
taipei[125] = [
  {
    pid: '125',
    sid: '125',
    name: '新北投',
    lat: '25.1369380',
    lng: '121.5025330',
    zoom: '16',
    nid: '4198'
  },
  {
    pid: '125',
    sid: '126',
    name: '淡水',
    lat: '25.1679890',
    lng: '121.4455130',
    zoom: '16',
    nid: '4163'
  },
  {
    pid: '125',
    sid: '127',
    name: '紅樹林',
    lat: '25.1548020',
    lng: '121.4588300',
    zoom: '16',
    nid: '4164'
  },
  {
    pid: '125',
    sid: '128',
    name: '竹圍',
    lat: '25.1373690',
    lng: '121.4598230',
    zoom: '16',
    nid: '4165'
  },
  {
    pid: '125',
    sid: '129',
    name: '關渡',
    lat: '25.1257790',
    lng: '121.4671340',
    zoom: '16',
    nid: '4166'
  },
  {
    pid: '125',
    sid: '130',
    name: '忠義',
    lat: '25.1315510',
    lng: '121.4733840',
    zoom: '16',
    nid: '4167'
  },
  {
    pid: '125',
    sid: '131',
    name: '復興崗',
    lat: '25.1379610',
    lng: '121.4888120',
    zoom: '16',
    nid: '4168'
  },
  {
    pid: '125',
    sid: '132',
    name: '北投',
    lat: '25.1318340',
    lng: '121.4983650',
    zoom: '16',
    nid: '4169'
  },
  {
    pid: '125',
    sid: '133',
    name: '奇岩',
    lat: '25.1252870',
    lng: '121.5011280',
    zoom: '16',
    nid: '4170'
  },
  {
    pid: '125',
    sid: '134',
    name: '唭哩岸',
    lat: '25.1208790',
    lng: '121.5062460',
    zoom: '16',
    nid: '4171'
  },
  {
    pid: '125',
    sid: '135',
    name: '石牌',
    lat: '25.1145210',
    lng: '121.5155500',
    zoom: '16',
    nid: '4172'
  },
  {
    pid: '125',
    sid: '136',
    name: '明德',
    lat: '25.1096560',
    lng: '121.5189190',
    zoom: '16',
    nid: '4173'
  },
  {
    pid: '125',
    sid: '137',
    name: '芝山',
    lat: '25.1030550',
    lng: '121.5225110',
    zoom: '16',
    nid: '4174'
  },
  {
    pid: '125',
    sid: '138',
    name: '士林',
    lat: '25.0935290',
    lng: '121.5262170',
    zoom: '16',
    nid: '4175'
  },
  {
    pid: '125',
    sid: '139',
    name: '劍潭',
    lat: '25.0843370',
    lng: '121.5250210',
    zoom: '16',
    nid: '4176'
  },
  {
    pid: '125',
    sid: '140',
    name: '圓山',
    lat: '25.0716410',
    lng: '121.5201180',
    zoom: '16',
    nid: '4177'
  },
  {
    pid: '125',
    sid: '141',
    name: '民權西路',
    lat: '25.0622190',
    lng: '121.5196140',
    zoom: '16',
    nid: '4178'
  },
  {
    pid: '125',
    sid: '142',
    name: '雙連',
    lat: '25.0577970',
    lng: '121.5206650',
    zoom: '16',
    nid: '4179'
  },
  {
    pid: '125',
    sid: '143',
    name: '中山',
    lat: '25.0526360',
    lng: '121.5203700',
    zoom: '16',
    nid: '4180'
  },
  {
    pid: '125',
    sid: '144',
    name: '台北車站',
    lat: '25.0462700',
    lng: '121.5175050',
    zoom: '16',
    nid: '4181'
  },
  {
    pid: '125',
    sid: '145',
    name: '台大醫院',
    lat: '25.0421970',
    lng: '121.5163200',
    zoom: '16',
    nid: '4182'
  },
  {
    pid: '125',
    sid: '146',
    name: '中正紀念堂',
    lat: '25.0339300',
    lng: '121.5173820',
    zoom: '16',
    nid: '4183'
  },
  {
    pid: '125',
    sid: '147',
    name: '東門',
    lat: '25.0338845',
    lng: '121.5284819',
    zoom: '16',
    nid: '4200'
  },
  {
    pid: '125',
    sid: '148',
    name: '大安森林公園',
    lat: '25.0335989',
    lng: '121.5351496',
    zoom: '16',
    nid: '4201'
  },
  {
    pid: '125',
    sid: '149',
    name: '大安',
    lat: '25.0329920',
    lng: '121.5435820',
    zoom: '16',
    nid: '4188'
  },
  {
    pid: '125',
    sid: '150',
    name: '信義安和',
    lat: '25.0332828',
    lng: '121.5524300',
    zoom: '16',
    nid: '66300'
  },
  {
    pid: '125',
    sid: '151',
    name: '台北101/世貿',
    lat: '25.0329368',
    lng: '121.5628530',
    zoom: '16',
    nid: '66301'
  },
  {
    pid: '125',
    sid: '152',
    name: '象山',
    lat: '25.0329122',
    lng: '121.5693137',
    zoom: '16',
    nid: '4205'
  }
]
taipei[195] = [
  {
    pid: '195',
    sid: '196',
    name: '北投',
    lat: '25.1318340',
    lng: '121.4983650',
    zoom: '16',
    nid: '4169'
  },
  {
    pid: '195',
    sid: '197',
    name: '新北投',
    lat: '25.1369380',
    lng: '121.5025330',
    zoom: '16',
    nid: '4198'
  }
]

taipei[148] = [
  {
    pid: '148',
    sid: '214',
    name: '松山',
    lat: '25.0501397',
    lng: '121.5781343',
    zoom: '16',
    nid: '4235'
  },
  {
    pid: '148',
    sid: '213',
    name: '南京三民',
    lat: '25.0515122',
    lng: '121.5639883',
    zoom: '16',
    nid: '4236'
  },
  {
    pid: '148',
    sid: '212',
    name: '台北小巨蛋',
    lat: '25.0517392',
    lng: '121.5516207',
    zoom: '16',
    nid: '4237'
  },
  {
    pid: '148',
    sid: '211',
    name: '南京復興',
    lat: '25.0525280',
    lng: '121.5440670',
    zoom: '16',
    nid: '4186'
  },
  {
    pid: '148',
    sid: '210',
    name: '松江南京',
    lat: '25.0520698',
    lng: '121.5327819',
    zoom: '16',
    nid: '66266'
  },
  {
    pid: '148',
    sid: '209',
    name: '中山',
    lat: '25.0526360',
    lng: '121.5203700',
    zoom: '16',
    nid: '4180'
  },
  {
    pid: '148',
    sid: '208',
    name: '北門',
    lat: '25.0501713',
    lng: '121.5103855',
    zoom: '16',
    nid: '4241'
  },
  {
    pid: '148',
    sid: '207',
    name: '西門',
    lat: '25.0422280',
    lng: '121.5083110',
    zoom: '16',
    nid: '4242'
  },
  {
    pid: '148',
    sid: '150',
    name: '小南門',
    lat: '25.0355920',
    lng: '121.5107840',
    zoom: '16',
    nid: '4255'
  },
  {
    pid: '125',
    sid: '146',
    name: '中正紀念堂',
    lat: '25.0339300',
    lng: '121.5173820',
    zoom: '16',
    nid: '4183'
  },
  {
    pid: '148',
    sid: '153',
    name: '古亭',
    lat: '25.0270570',
    lng: '121.5223660',
    zoom: '16',
    nid: '4184'
  },
  {
    pid: '148',
    sid: '154',
    name: '台電大樓',
    lat: '25.0204950',
    lng: '121.5283310',
    zoom: '16',
    nid: '4244'
  },
  {
    pid: '148',
    sid: '155',
    name: '公館',
    lat: '25.0147680',
    lng: '121.5342910',
    zoom: '16',
    nid: '4245'
  },
  {
    pid: '148',
    sid: '156',
    name: '萬隆',
    lat: '25.0019100',
    lng: '121.5390330',
    zoom: '16',
    nid: '4246'
  },
  {
    pid: '148',
    sid: '157',
    name: '景美',
    lat: '24.9925600',
    lng: '121.5406310',
    zoom: '16',
    nid: '4247'
  },
  {
    pid: '148',
    sid: '158',
    name: '大坪林',
    lat: '24.9830010',
    lng: '121.5414040',
    zoom: '16',
    nid: '4248'
  },
  {
    pid: '148',
    sid: '159',
    name: '七張',
    lat: '24.9750210',
    lng: '121.5430670',
    zoom: '16',
    nid: '4249'
  },
  {
    pid: '148',
    sid: '160',
    name: '新店市公所',
    lat: '24.9677900',
    lng: '121.5414570',
    zoom: '16',
    nid: '4251'
  },
  {
    pid: '148',
    sid: '161',
    name: '新店',
    lat: '24.9575190',
    lng: '121.5375310',
    zoom: '16',
    nid: '4250'
  },
  {
    pid: '148',
    sid: '194',
    name: '小碧潭',
    lat: '24.9718600',
    lng: '121.5304100',
    zoom: '16',
    nid: '4253'
  }
]

taipei[192] = [
  {
    pid: '192',
    sid: '194',
    name: '小碧潭',
    lat: '24.9718600',
    lng: '121.5304100',
    zoom: '16',
    nid: '4253'
  },
  {
    pid: '192',
    sid: '193',
    name: '七張',
    lat: '24.9750210',
    lng: '121.5430670',
    zoom: '16',
    nid: '4249'
  }
]

taipei[162] = [
  {
    pid: '162',
    sid: '237',
    name: '蘆洲',
    lat: '25.0917625',
    lng: '121.4639818',
    zoom: '16',
    nid: '66258'
  },
  {
    pid: '162',
    sid: '236',
    name: '三民高中',
    lat: '25.0854674',
    lng: '121.4733363',
    zoom: '16',
    nid: '66259'
  },
  {
    pid: '162',
    sid: '235',
    name: '徐匯中學',
    lat: '25.0807711',
    lng: '121.4795041',
    zoom: '16',
    nid: '66260'
  },
  {
    pid: '162',
    sid: '234',
    name: '三和國中',
    lat: '25.0768671',
    lng: '121.4862494',
    zoom: '16',
    nid: '66261'
  },
  {
    pid: '162',
    sid: '233',
    name: '三重國小',
    lat: '25.0702588',
    lng: '121.4970673',
    zoom: '16',
    nid: '66262'
  },
  {
    pid: '162',
    sid: '231',
    name: '迴龍',
    lat: '25.0223802',
    lng: '121.4122956',
    zoom: '16',
    nid: '4207'
  },
  {
    pid: '162',
    sid: '230',
    name: '丹鳳',
    lat: '25.0289433',
    lng: '121.4220879',
    zoom: '16',
    nid: '4208'
  },
  {
    pid: '162',
    sid: '229',
    name: '輔大',
    lat: '25.0328224',
    lng: '121.4356373',
    zoom: '16',
    nid: '4209'
  },
  {
    pid: '162',
    sid: '228',
    name: '新莊',
    lat: '25.0360967',
    lng: '121.4517618',
    zoom: '16',
    nid: '4210'
  },
  {
    pid: '162',
    sid: '227',
    name: '頭前庄',
    lat: '25.0397140',
    lng: '121.4615264',
    zoom: '16',
    nid: '4211'
  },
  {
    pid: '162',
    sid: '226',
    name: '先嗇宮',
    lat: '25.0465075',
    lng: '121.4716406',
    zoom: '16',
    nid: '4212'
  },
  {
    pid: '162',
    sid: '225',
    name: '三重',
    lat: '25.0558034',
    lng: '121.4838470',
    zoom: '16',
    nid: '4213'
  },
  {
    pid: '162',
    sid: '224',
    name: '菜寮',
    lat: '25.0596624',
    lng: '121.4908597',
    zoom: '16',
    nid: '4214'
  },
  {
    pid: '162',
    sid: '223',
    name: '台北橋',
    lat: '25.0633142',
    lng: '121.5003498',
    zoom: '16',
    nid: '4215'
  },
  {
    pid: '162',
    sid: '222',
    name: '大橋頭',
    lat: '25.0630558',
    lng: '121.5125798',
    zoom: '16',
    nid: '4216'
  },
  {
    pid: '162',
    sid: '221',
    name: '民權西路',
    lat: '25.0622190',
    lng: '121.5196140',
    zoom: '16',
    nid: '4178'
  },
  {
    pid: '162',
    sid: '220',
    name: '中山國小',
    lat: '25.0627367',
    lng: '121.5263755',
    zoom: '16',
    nid: '66264'
  },
  {
    pid: '162',
    sid: '219',
    name: '行天宮',
    lat: '25.0593408',
    lng: '121.5331007',
    zoom: '16',
    nid: '66265'
  },
  {
    pid: '162',
    sid: '218',
    name: '松江南京',
    lat: '25.0520698',
    lng: '121.5327819',
    zoom: '16',
    nid: '66266'
  },
  {
    pid: '162',
    sid: '217',
    name: '忠孝新生',
    lat: '25.0423570',
    lng: '121.5329040',
    zoom: '16',
    nid: '4221'
  },
  {
    pid: '162',
    sid: '216',
    name: '東門',
    lat: '25.0338845',
    lng: '121.5284819',
    zoom: '16',
    nid: '4200'
  },
  {
    pid: '162',
    sid: '163',
    name: '古亭',
    lat: '25.0270570',
    lng: '121.5223660',
    zoom: '16',
    nid: '4184'
  },
  {
    pid: '162',
    sid: '164',
    name: '頂溪',
    lat: '25.0135190',
    lng: '121.5154290',
    zoom: '16',
    nid: '4231'
  },
  {
    pid: '162',
    sid: '165',
    name: '永安市場',
    lat: '25.0025860',
    lng: '121.5109880',
    zoom: '16',
    nid: '4232'
  },
  {
    pid: '162',
    sid: '166',
    name: '景安',
    lat: '24.9939020',
    lng: '121.5050870',
    zoom: '16',
    nid: '4233'
  },
  {
    pid: '162',
    sid: '167',
    name: '南勢角',
    lat: '24.9897210',
    lng: '121.5097700',
    zoom: '16',
    nid: '4234'
  }
]

taipei[168] = [
  {
    pid: '168',
    sid: '101',
    name: '南港展覽館',
    lat: '25.0552650',
    lng: '121.6173590',
    zoom: '16',
    nid: '4257'
  },
  {
    pid: '168',
    sid: '180',
    name: '南港',
    lat: '25.0521400',
    lng: '121.6070590',
    zoom: '16',
    nid: '4258'
  },
  {
    pid: '168',
    sid: '179',
    name: '昆陽',
    lat: '25.0504120',
    lng: '121.5932620',
    zoom: '16',
    nid: '4259'
  },
  {
    pid: '168',
    sid: '178',
    name: '後山埤',
    lat: '25.0448650',
    lng: '121.5823700',
    zoom: '16',
    nid: '4260'
  },
  {
    pid: '168',
    sid: '177',
    name: '永春',
    lat: '25.0408770',
    lng: '121.5755860',
    zoom: '16',
    nid: '4261'
  },
  {
    pid: '168',
    sid: '176',
    name: '市政府',
    lat: '25.0411440',
    lng: '121.5659710',
    zoom: '16',
    nid: '4262'
  },
  {
    pid: '168',
    sid: '175',
    name: '國父紀念館',
    lat: '25.0413310',
    lng: '121.5577420',
    zoom: '16',
    nid: '4263'
  },
  {
    pid: '168',
    sid: '174',
    name: '忠孝敦化',
    lat: '25.0414990',
    lng: '121.5505080',
    zoom: '16',
    nid: '4264'
  },
  {
    pid: '168',
    sid: '173',
    name: '忠孝復興',
    lat: '25.0416040',
    lng: '121.5437750',
    zoom: '16',
    nid: '4187'
  },
  {
    pid: '168',
    sid: '172',
    name: '忠孝新生',
    lat: '25.0423570',
    lng: '121.5329040',
    zoom: '16',
    nid: '4221'
  },
  {
    pid: '168',
    sid: '171',
    name: '善導寺',
    lat: '25.0447580',
    lng: '121.5236800',
    zoom: '16',
    nid: '4267'
  },
  {
    pid: '168',
    sid: '170',
    name: '台北車站',
    lat: '25.0462700',
    lng: '121.5175050',
    zoom: '16',
    nid: '4181'
  },
  {
    pid: '168',
    sid: '169',
    name: '西門',
    lat: '25.0422280',
    lng: '121.5083110',
    zoom: '16',
    nid: '4242'
  },
  {
    pid: '168',
    sid: '186',
    name: '龍山寺',
    lat: '25.0352810',
    lng: '121.4998350',
    zoom: '16',
    nid: '4271'
  },
  {
    pid: '168',
    sid: '185',
    name: '江子翠',
    lat: '25.0304790',
    lng: '121.4728090',
    zoom: '16',
    nid: '4272'
  },
  {
    pid: '168',
    sid: '184',
    name: '新埔',
    lat: '25.0234110',
    lng: '121.4681960',
    zoom: '16',
    nid: '4273'
  },
  {
    pid: '168',
    sid: '183',
    name: '板橋',
    lat: '25.0138300',
    lng: '121.4625250',
    zoom: '16',
    nid: '4274'
  },
  {
    pid: '168',
    sid: '182',
    name: '府中',
    lat: '25.0085650',
    lng: '121.4591780',
    zoom: '16',
    nid: '4275'
  },
  {
    pid: '168',
    sid: '191',
    name: '亞東醫院',
    lat: '24.9984430',
    lng: '121.4525580',
    zoom: '16',
    nid: '4277'
  },
  {
    pid: '168',
    sid: '190',
    name: '海山',
    lat: '24.9853060',
    lng: '121.4488190',
    zoom: '16',
    nid: '4278'
  },
  {
    pid: '168',
    sid: '189',
    name: '土城',
    lat: '24.9731510',
    lng: '121.4443400',
    zoom: '16',
    nid: '4279'
  },
  {
    pid: '168',
    sid: '188',
    name: '永寧',
    lat: '24.9667980',
    lng: '121.4363040',
    zoom: '16',
    nid: '4280'
  },
  {
    pid: '168',
    sid: '192',
    name: '頂埔',
    lat: '24.9593915',
    lng: '121.4194736',
    zoom: '16',
    nid: '4281'
  }
]

taipei[316] = [
  {
    pid: '316',
    sid: '279',
    name: '紅樹林',
    lat: '25.1548020',
    lng: '121.4588300',
    zoom: '16',
    nid: '4164'
  },
  {
    pid: '316',
    sid: '317',
    name: '竿蓁林',
    lat: '25.1597544',
    lng: '121.4556931',
    zoom: '16',
    nid: '66346'
  },
  {
    pid: '316',
    sid: '318',
    name: '淡金鄧公',
    lat: '25.1687402',
    lng: '121.4592487',
    zoom: '16',
    nid: '66347'
  },
  {
    pid: '316',
    sid: '319',
    name: '淡江大學',
    lat: '25.1749753',
    lng: '121.4561137',
    zoom: '16',
    nid: '66348'
  },
  {
    pid: '316',
    sid: '320',
    name: '淡金北新',
    lat: '25.1808191',
    lng: '121.4502724',
    zoom: '16',
    nid: '66349'
  },
  {
    pid: '316',
    sid: '321',
    name: '新市一路',
    lat: '25.1833358',
    lng: '121.4452655',
    zoom: '16',
    nid: '66350'
  },
  {
    pid: '316',
    sid: '322',
    name: '淡水行政中心',
    lat: '25.1887316',
    lng: '121.4430910',
    zoom: '16',
    nid: '66351'
  },
  {
    pid: '316',
    sid: '323',
    name: '濱海義山',
    lat: '25.1898678',
    lng: '121.4352573',
    zoom: '16',
    nid: '66352'
  },
  {
    pid: '316',
    sid: '324',
    name: '濱海沙崙',
    lat: '25.1905979',
    lng: '121.4290000',
    zoom: '16',
    nid: '66353'
  },
  {
    pid: '316',
    sid: '325',
    name: '淡海新市鎮',
    lat: '25.1906219',
    lng: '121.4224339',
    zoom: '16',
    nid: '66354'
  },
  {
    pid: '316',
    sid: '326',
    name: '崁頂',
    lat: '25.1990378',
    lng: '121.4317023',
    zoom: '16',
    nid: '66355'
  },
  {
    pid: '316',
    sid: 66383,
    name: '台北海洋大學',
    lat: '25.190966',
    lng: '121.426462',
    zoom: '16',
    nid: '66383'
  },
  {
    pid: '316',
    sid: 66384,
    name: '沙崙',
    lat: '25.187311',
    lng: '121.417181',
    zoom: '16',
    nid: '66384'
  },
  {
    pid: '316',
    sid: 66385,
    name: '淡水漁人碼頭',
    lat: '25.182250',
    lng: '121.418640',
    zoom: '16',
    nid: '66385'
  }
]

taipei[346] = [
  {
    pid: '346',
    sid: 4248,
    name: '大坪林',
    lat: '24.9829038',
    lng: '121.5391623',
    zoom: '16',
    nid: '4248'
  },
  {
    pid: '346',
    sid: 4306,
    name: '十四張',
    lat: '24.984625',
    lng: '121.527729',
    zoom: '16',
    nid: '4306'
  },
  {
    pid: '346',
    sid: 66358,
    name: '秀朗橋',
    lat: '24.990466',
    lng: '121.524989',
    zoom: '16',
    nid: '66358'
  },
  {
    pid: '346',
    sid: 66359,
    name: '景平',
    lat: '24.9920701',
    lng: '121.5141418',
    zoom: '16',
    nid: '66359'
  },
  {
    pid: '346',
    sid: 4233,
    name: '景安',
    lat: '24.9938633',
    lng: '121.5025998',
    zoom: '16',
    nid: '4233'
  },
  {
    pid: '346',
    sid: 66360,
    name: '中和',
    lat: '25.002556',
    lng: '121.495611',
    zoom: '16',
    nid: '66360'
  },
  {
    pid: '346',
    sid: 66361,
    name: '橋和',
    lat: '25.004479',
    lng: '121.490515',
    zoom: '16',
    nid: '66361'
  },
  {
    pid: '346',
    sid: 66362,
    name: '中原',
    lat: '25.008345',
    lng: '121.484494',
    zoom: '16',
    nid: '66362'
  },
  {
    pid: '346',
    sid: 4299,
    name: '板新',
    lat: '25.014702',
    lng: '121.472552',
    zoom: '16',
    nid: '4299'
  },
  {
    pid: '346',
    sid: 4298,
    name: '板橋',
    lat: '25.015478',
    lng: '121.464620',
    zoom: '16',
    nid: '4298'
  },
  {
    pid: '346',
    sid: 66363,
    name: '新埔民生',
    lat: '25.026311',
    lng: '121.466642',
    zoom: '16',
    nid: '66363'
  },
  {
    pid: '346',
    sid: 4211,
    name: '頭前庄',
    lat: '25.0398568',
    lng: '121.4583356',
    zoom: '16',
    nid: '4211'
  },
  {
    pid: '346',
    sid: 66364,
    name: '幸福',
    lat: '25.050246',
    lng: '121.459971',
    zoom: '16',
    nid: '66364'
  },
  {
    pid: '346',
    sid: 66365,
    name: '新北產業園區',
    lat: '25.0615991',
    lng: '121.4572774',
    zoom: '16',
    nid: '66365'
  }
]

const condition = {
  // 排序
  order: [
    { name: '預設排序', value: '1', param: '' },
    { name: '最新', value: '2', param: 'order=posttime&orderType=desc' },
    { name: '租金最高', value: '3', param: 'order=money&orderType=desc' },
    { name: '租金最低', value: '4', param: 'order=money&orderType=asc' },
    { name: '坪數最大', value: '5', param: 'order=area&orderType=desc' },
    { name: '坪數最小', value: '6', param: 'order=area&orderType=asc' }
  ],
  // 類型
  kind: [
    { name: '整層住家', value: '1' },
    { name: '獨立套房', value: '2' },
    { name: '分租套房', value: '3' },
    { name: '雅房', value: '4' },
    { name: '車位', value: '8' },
    { name: '其他', value: '24' }
  ],
  // 租金
  rentprice: '17000,23000',
  // 格局
  multiRoom: [
    { name: '1房', value: '1' },
    { name: '2房', value: '2' },
    { name: '3房', value: '3' },
    { name: '4房以上', value: '4' }
  ],
  // 特色
  other: [
    { name: '新上架', value: 'newPost' },
    { name: '近捷運', value: 'near_subway' },
    { name: '可養寵物', value: 'pet' },
    { name: '可開伙', value: 'cook' },
    { name: '有車位', value: 'cartplace' },
    { name: '有電梯', value: 'lift' },
    { name: '有陽台', value: 'balcony_1' },
    { name: '可短期租賃', value: 'lease' }
  ],
  // 型態
  shape: [
    { name: '公寓', value: '1' },
    { name: '電梯大樓', value: '2' },
    { name: '透天厝', value: '3' },
    { name: '別墅', value: '4' }
  ],
  // 坪數
  area: '20,90',
  // 樓層
  floor: [
    { name: '1層', value: '1_1' },
    { name: '2-6層', value: '2_6' },
    { name: '6-12層', value: '6_12' },
    { name: '12層以上', value: '13_' }
  ],
  // 衛浴
  multiToilet: [
    { name: '1衛', value: '1' },
    { name: '2衛', value: '2' },
    { name: '3衛', value: '3' },
    { name: '4衛以上', value: '4_' }
  ],
  // 設備
  option: [
    { name: '有冷氣', value: 'cold' },
    { name: '有洗衣機', value: 'washer' },
    { name: '有冰箱', value: 'icebox' },
    { name: '有熱水器', value: 'hotwater' },
    { name: '有天然瓦斯', value: 'naturalgas' },
    { name: '有網路', value: 'broadband' },
    { name: '床', value: 'bed' }
  ],
  // 裝潢
  multiFitment: [
    { name: '新裝潢', value: '99' },
    { name: '中檔裝潢', value: '3' },
    { name: '高檔裝潢', value: '4' }
  ],
  // 須知
  multiNotice: [
    { name: '男女皆可', value: 'all_sex' },
    { name: '限男性', value: 'boy' },
    { name: '限女性', value: 'girl' },
    { name: '排除頂樓加蓋', value: 'not_cover' }
  ],
  section,
  subwayRoute,
  taipei
}

export { condition }