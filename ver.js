
versionsOfRedmiNote9ProMax =[
    {
        version:'MIUI V5',
        relaseDate:new Date(' 1 March 2013'),
        features:['New user interface','Google Services were removed from the Chinese version'],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 6',
        relaseDate:new Date('29 August 2014'),
        features:['Dropped devices running Android Jelly Bean or below'],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 7',
        relaseDate:new Date('13 August 2015'),
        features:[' Locked bootloader on selected old devices and all released afterwards'],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 8',
        relaseDate:new Date('16 June 2016'),
        features:['Added support for Second Space and Dual apps. '],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 9',
        relaseDate:new Date('10 August 2017'),
        features:[' Improved Notification Shade and QuickCard'],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 10',
        relaseDate:new Date('19 June 2018'),
        features:['New recent apps screen, volume control, Clock, Calendar and Notes '],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 11',
        relaseDate:new Date('22 October 2019'),
        features:['System-wide dark mode, with dark mode scheduling. '],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    },
    {
        version:'MIUI 12',
        relaseDate:new Date('27 April 2020'),
        features:['More privacy focused '],
        bugs:['BGSG01','BGB02','bgok03'],
        author:['A','B','C','D'],
        type:'enhancement'
    }
]

function findRelaseDate(str){
   
    bug=data.filter(n=>n.relaseDate.includes(str))
    console.log(`${relaseDate.length}  have ${str} relesedate`)
    console.table(bug)
    console.log(relaseDate.length,"relesedate")
   
}
function findByType(type){
    
    findType=data.filter(n=>n.versionType.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.table(findType)
    
}
function findByFeature(str){

    feature=data.filter(n=>n.features.includes(str))
    console.log(`${feature.length} versions have ${str} Feature...`)
    console.table(feature)
   
}
function findByAuthor(name){
    
    authorName=data.filter(n=>n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.table(authorName)
    
}
function findByVersion(ver){
    
    version=data.filter(n=>n.version==ver)
    console.table(version)
  
}
findRelaseDate("13 August 2015")
findByReleaseYear(2016)
findByVersion("MIUI 12")
