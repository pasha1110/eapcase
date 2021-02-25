#EapCase
####for better programming

## introduction 
eapcase is tool to show **writing style in programming**, this package is not to large only **1.6 kb!** (may change at any time).

##Installation
**Note** this package **only** supports npm only,
first you need to install this package with:

> npm install -g eapcase 

**Note** -g flags to install globally, if you
don't want to install globally remove -g

##Fast Documentation

###Case support:
Case name   | version
------------|--------
Case.kebab  | 1.0.0 
Case.snake  | 1.0.0 
Case.camel  | 1.0.0
Case.pascal | 1.0.0

* _Several cases will be released in the next update_

##how to use

**Note** Name your file with the **.mjs** extension because this package using import and export 

So this is your file name: 
`filename.mjs `

**Note** remove filename with your file name


Just import **eapcase/index.mjs** 





Then print your Text using console.log Followed by `Case._case style here_`

So the contents of the file will look like this

Example:

```
import Case from 'eapcase/index.mjs';

console.log (Case.snake ("Hello World"));
 
```

Output:

```
Hello_World
```

##method 
use this method to make the output lowercase or uppercase

1. .lower().

    To convert your output to lowercase

    Example:

    ```
    console.log(Case.snake("Hello World").lower());
```

2. .upper().

    To convert your output to uppercase.

    Example:
    
    ```
console.log (Case.snake ("hello world").upper());
```

##Conclusion

So that was the documentation for eapcase, a tool to show writing style in programming. The next update will include more Cases, so wait for the next update, ok!.

So good-bye, and don't forget the semicolon, bye bye!