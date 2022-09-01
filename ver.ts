interface Version {
    version: string,
    releaseDate: Date,
    bugID: string[] | string,
    features: string[] | string,
    author: string[] | string,
    versionType: string
   }
   
   // Version informations
   const data: Version[] = [{
    version:'MIUI V5',
    releaseDate:new Date (' 1 March 2013'),
    features:['New user interface','Google Services were removed from the Chinese version'],
    bugID:['BUG1'],
    author:['A','B','C','D'],
    versionType:'patch'
},
{
    version:'MIUI 6',
    releaseDate:new Date('29 August 2014'),
    features:['Dropped devices running Android Jelly Bean or below'],
    bugID:['BUG2'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 7',
    releaseDate:new Date('13 August 2015'),
    features:[' Locked bootloader on selected old devices and all released afterwards'],
    bugID:['BUG3',],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 8',
    releaseDate:new Date('16 June 2016'),
    features:['Added support for Second Space and Dual apps. '],
    bugID:['BUG4'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 9',
    releaseDate:new Date('10 August 2017'),
    features:[' Improved Notification Shade and QuickCard'],
    bugID:['BUG5'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 10',
    releaseDate:new Date('19 June 2018'),
    features:['New recent apps screen, volume control, Clock, Calendar and Notes '],
    bugID:['BUG6'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 11',
    releaseDate:new Date('22 October 2019'),
    features:['System-wide dark mode, with dark mode scheduling. '],
    bugID:['BUG7'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 12',
    releaseDate:new Date ('27 April 2020'),
    features:['More privacy focused '],
    bugID:['BUG8'],
    author:['A','B','C','D'],
    versionType:"enhancement"
}]
// Bug List
const bugList = [{
    bugID:"BUG1",
    bug:['New user interface','Google Services were removed from the Chinese version']
}, {
    bugID: "BUG2",
    bug:['Dropped devices running Android Jelly Bean or below']
}, {
    bugID: "BUG3",
    bug: [' Locked bootloader on selected old devices and all released afterwards']
}, {
    bugID: "BUG4",
    bug: ['Added support for Second Space and Dual apps. ']
}, {
    bugID: "BUG5",
    bug: [' Improved Notification Shade and QuickCard']
},{
    bugID: "BUG6",
    bug: ['New recent apps screen, volume control, Clock, Calendar and Notes ']
},{
    bugID: "BUG7",
    bug: ['System-wide dark mode, with dark mode scheduling. ']
}, {
    bugID: "BUG8",
    bug:['More privacy focused ']
}, 
]

   // find Information by Year
   function findByReleaseYear(year: any) {
   let filteredYear = data.filter(n => n.releaseDate.toString().includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.log(filteredYear)
    
   }
   // find Information by Bug
   function findByBug(str: string) {
    let bug = data.filter(n => n.bugID.includes(str))
    console.log(`${bug.length} version have ${str} Bug...`)
    console.log(bug)
    console.log(bug.length, "Bugs")
    
   }
   // find Information by Type
   function findByversionType(str: string) {
    
    let findType = data.filter(n => n.versionType.includes(str))
    console.log(`${findType.length} versions have ${str} type...`)
    console.table(findType)
    
   }
   // find Information by Features
   function findByfeatures(str: string) {
    
    let feature = data.filter(n => n.features.includes(str))
    console.log(`${feature.length} versions have ${str} Feature...`)
    console.log(feature)
    
   }
   /*find Information by Author Name
   function findByauthor(name: string) {
    console.log("---------------------------------------------------------------------------")
    let authorName = data.filter(n => n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.log(authorName)
    console.log("---------------------------------------------------------------------------")
   }*/
   // find Information by Version
   function findByversion(ver: string) {
    
    let version = data.filter(n => n.version == ver)
    console.log(version)
    
   }
   // Finding which author had more Updated
   function findHighestUpdatedByAuthor() {
    let authorNames: string[] = []
    data.forEach(element => {
    for (let i of element.author) {
    authorNames.push(i)
    }
    });
    let m = 1
    let authorName = "default";
    let mostFrequent = 1
    for (let i = 0; i < authorNames.length; i++) {
    for (let j = 1; j < authorNames.length; j++) {
    if (authorNames[i] == authorNames[j]) {
    m++
    }
    if (mostFrequent < m) {
    mostFrequent = m
    authorName = authorNames[i]
    }
    }
    m = 0
    }
    
    console.log(`The author ${authorName} has worked on more no of releases, the count is ${mostFrequent}`)
   
   }
   // find Information by Bug
function findByBugID(str: string) {
  
    bugList.forEach(element => {
        if (element.bugID == str) {
            console.log(element.bug)
        }
    })
    let findBug = data.filter(n => n.bugID.includes(str))
    console.log(`The version which have "${str}" ID...`)
    console.log(findBug)}
  
   
   findHighestUpdatedByAuthor()
   findByversionType("patch")
   findByBug("BGSG01")
   findByReleaseYear("2020")
   findByfeatures("67A")
   findByversion("MIUI 8")