const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = num.filter((num) => {
//    return num > 4;
// });

// console.log(result);

const coding = [
    {
        name : "javascript",
        fileName: "js",
        publish : 1999
    },
    {
        name :"java",
        fileName: "java",
        publish : 1980
    },
    {
        name :"python",
        fileName: "python",
        publish : 2004
    },
    {
        name :"csharp",
        fileName: "c#",
        publish : 2002
    }
    ,
    {
        name :"vb.NET",
        fileName: "vbs",
        publish : 1990
    }

];

const books = coding.filter((bk)=>{
    return bk.publish > 2000;
});

console.log(books);
