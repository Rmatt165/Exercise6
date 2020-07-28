const ul =document.querySelector("ul")
const movies = [
{
    name: " interstellar",
    poster : " https://www.google.com/search?q=interstellar+poster&safe=active&rlz=1C1CHBF_enUS900US900&sxsrf=ALeKk01fSIiQI3-OsQHJx5eIs_vii4RMfQ:1594005624598&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7l5jY1bfqAhVEmuAKHRbeBl8Q_AUoAXoECAwQAw&biw=2560&bih=937#imgrc=xnU4BlnWisQsYM",
    year: "  October 26, 2014",
    director : " Christopher Nolan"
},
{
    Name: " lion King",
    poster : " https://www.google.com/search?q=lion+king+poster&safe=active&rlz=1C1CHBF_enUS900US900&sxsrf=ALeKk03iTlQSZQTZyoh0450eZua8FhHrxg:1594005917811&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPqIDk1rfqAhWQTt8KHfDWBLoQ_AUoAXoECAwQAw&biw=2560&bih=937#imgrc=v7D5MxsM9zeruM" ,
    year : " June 24, 1994",
    director : " Rob Minkoff"
},
{
    name : " Inception", 
    poster : " https://www.google.com/search?q=inception+poster&safe=active&rlz=1C1CHBF_enUS900US900&hl=en&sxsrf=ALeKk00GmxPaBFloaQxYta99V_I148T5wQ:1594006661512&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5ytDG2bfqAhXiY98KHQjrAqoQ_AUoAXoECA4QAw&biw=2560&bih=937#imgrc=sm7aW88D1wpxPM",
    year : "  July 13, 2010",
    director : " Christopher Nolan",
},
{
 name: " Nemo",
 Poster : " https://www.google.com/search?q=nemo+poster&safe=active&rlz=1C1CHBF_enUS900US900&hl=en&sxsrf=ALeKk00DnjNqdX1qgLN-oPh54DnhyjyWHQ:1594006982837&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjtsOzf2rfqAhUQTd8KHWZYBBsQ_AUoAXoECA0QAw&biw=2560&bih=937#imgrc=TObNFDJJhn40xM",
 year : " 2003",
 director :" Andrew Stanton",
},
{
    name : " tropic thunder",
    poster : " https://www.google.com/search?q=tropic+thunder+poster&safe=active&rlz=1C1CHBF_enUS900US900&sxsrf=ALeKk01kvXa0RwqDAtA4HgXvX3nRedGVzA:1594006230828&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjIt6H517fqAhVxUN8KHXs9Bw0Q_AUoAXoECAwQAw&biw=2560&bih=937#imgrc=Xvg1Ay8U8uy3AM",
    director : " Ben Stiller",
    year  :" August 13, 2008"
}

] ;

const numbers = [1,2,3,4,5];
const doubled = numbers.map(number => number * 2);

const template = movies.map(movie =>`
<li>
    <p>name:${movie.name}</p>
    <p>poster:${movie.poster}</p>
    <p>year:${movie.year}</p>
    <p>director: ${movie.director}</p>
</li>)
`);
ul.innerHTML= template.join(' ');
