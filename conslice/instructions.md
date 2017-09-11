## Conslice

Conslice is a methodology that makes commenting code more effective and easier to understand.  Part of its inspiration comes from some sage advice by [\@JesseLiberty](https://twitter.com/JesseLiberty): *Writing code is cheap. Maintaining code is expensive.*

#### One file for all your comments
All of the comments in a project are numbered and contained within one file, *comments.md*. This is similar to the endnotes used in term papers.

#### Numbers
Each comment contains a three-digit number but there is nothing special about the order – you can simply view it as a timeline of when each comment was created. Remember to include leading zeroes, when necessary.

#### Comment markers
Comment markers should be placed near code blocks and point to the comment itself in *comments.md*. There are three different types:

  * ` //c031 ` where _c_ points to a standard comment. The vast majority of your comments will be of this type.  As a side note, the best comments explain the whys, hows, and constraints related to a particular block of code rather than what the code is doing.
  * ` //p017 ` where _p_ points to a pending issue. This type of comment serves as a reminder that something is incomplete. All comments prefixed with _p_ should be resolved before you deploy your application – this is, converted to _c_ or _v_ (see the following list item).
  * ` //v009 ` where _v_ indicates a comment that no longer applies to the current state of the code. As the application evolves, you will naturally delete some code as you find better solutions. When this happens, remove the comment marker along with the code you are removing but do not delete the comment itself in *comments.md*. Instead, indicate this change by prefixing the number with a _v_. This is preferred because comments often contain useful information that you can apply to other projects and it keeps the numbering consecutive and without gaps.

#### Keeping it clean
*Conslice* allows developers to easily search for the details attached to code blocks while having the freedom to be verbose, as well. It keeps the code from becoming cluttered and is also [*DRY*](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) since you can attach the same comment marker to more than one block of code, if necessary.

#### Who is behind *Conslice*?
Matthew Day  
on Twitter [\@_samuraijane](https://twitter.com/_samuraijane/)  
on [GitHub](https://github.com/samuraijane/)  
