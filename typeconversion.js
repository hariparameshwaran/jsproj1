bookid = "12345"; // id String
available = "false" // available String saying 'true' / 'false'
count = "25"; // count String
bookname = "Lord of the rings"; // name String 
author= "JRR Tolkein"; // author String
ans={'bookid': new Number(bookid).valueOf(), 
'available': available === 'true',
'count': new Number(count).valueOf(),
'bookname': bookname,
'author': author
}; // Store final answer in this variable

console.log(ans);