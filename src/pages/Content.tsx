import React from 'react';

const Content = () => (
  <div className="content">
    <h1>What is object-oriented programming?</h1>
    <p>
      Object-oriented programming (OOP) is a computer programming model
      that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.
    </p>
    <p>
      OOP focuses on the objects that developers want to manipulate
      rather than the logic required to manipulate them.
      This approach to programming is well-suited for programs
      that are large, complex and actively updated or maintained.
      This includes programs for manufacturing and design,
      as well as mobile applications; for example,
      OOP can be used for manufacturing system simulation software.
    </p>
    <p>
      The organization of an object-oriented program also makes the method
      beneficial to collaborative development, where projects are divided into groups.
      Additional benefits of OOP include code reusability, scalability and efficiency.
    </p>
    <p>
      The first step in OOP is to collect all of the objects a programmer wants to
      manipulate and identify how they relate to each other -- an exercise
      known as data modeling.
    </p>
    <p>
      Examples of an object can range from physical entities,
      such as a human being who is described by properties like name and address,
      to small computer programs, such as widgets.
    </p>
    <p>
      Once an object is known, it is labeled with a class of objects
      that defines the kind of data it contains and any logic sequences
      that can manipulate it. Each distinct logic sequence is known as a method.
      Objects can communicate with well-defined interfaces called messages.
    </p>
  </div>
);

export default Content;
