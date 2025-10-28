export interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const sqlQuestions: Question[] = [
  {
    id: "1",
    question: "What are the major sub-languages of SQL?",
    answer: "Based on the document, SQL is comprised of 3 major sub-languages:\n\n• Data Definition Language (DDL): Used to create and modify the structure of the database (e.g., CREATE TABLE).\n\n• Data Manipulation Language (DML): Used to perform read, insert, update, and delete operations on the data (e.g., SELECT, INSERT).\n\n• Data Control Language (DCL): Used to control access to the data stored in the database (e.g., GRANT, REVOKE).",
    category: "Foundational Concepts"
  },
  {
    id: "2",
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer: "• DELETE: This is a DML command used to remove specific rows from a table, often with a WHERE clause. If no WHERE clause is used, it deletes all rows. It is a row-by-row operation and logs each deletion.\n\n• TRUNCATE: This command deletes all rows from a table. It is much faster than DELETE for clearing a table because it ignores indexes and triggers, logs less, and resets auto-increment values. You cannot TRUNCATE specific rows.\n\n• DROP: This is a DDL command that completely deletes the database or table itself.",
    category: "Foundational Concepts"
  },
  {
    id: "3",
    question: "What is the difference between UNION and UNION ALL?",
    answer: "Both operators are used to combine the result sets of two or more SELECT statements.\n\n• UNION combines the results and removes duplicate rows.\n\n• UNION ALL combines the results but includes all duplicate rows. UNION ALL is faster because it does not perform the extra work of identifying and removing duplicates.",
    category: "Foundational Concepts"
  },
  {
    id: "4",
    question: "What is SQL Injection and how can it be prevented?",
    answer: "SQL Injection is an attack where a malicious user injects SQL code into a form field to trick the database into running unintended commands. This can be used to view private information, modify data, or even drop a database.\n\nThe best way to prevent it is to use parameters (also known as parameterized queries) instead of concatenating user input directly into a query string. This ensures the user input is treated as a value and not as executable code.",
    category: "Foundational Concepts"
  },
  {
    id: "5",
    question: "What is a Primary Key?",
    answer: "A Primary Key is a constraint used to uniquely identify each row in a table. Only one primary key is allowed per table. It can consist of a single column or multiple columns (which is called a composite key).",
    category: "Keys and Constraints"
  },
  {
    id: "6",
    question: "What is a Foreign Key?",
    answer: "A Foreign Key is a constraint that ensures data integrity by enforcing a link between data in two tables. It requires that the values in the foreign key column (in the 'child' table) must match values in a UNIQUE or PRIMARY KEY column in the 'parent' table.",
    category: "Keys and Constraints"
  },
  {
    id: "7",
    question: "How do you filter for NULL values in a query?",
    answer: "You must use the IS NULL or IS NOT NULL operators in the WHERE clause. You cannot use equality operators like = NULL or <> NULL because NULL represents an unknown or absent value and is not considered equal to anything, not even itself.",
    category: "Keys and Constraints"
  },
  {
    id: "8",
    question: "What is the difference between an INNER JOIN and a LEFT JOIN?",
    answer: "• An INNER JOIN returns only the rows that have a match in both tables. It represents the intersection of the two tables.\n\n• A LEFT OUTER JOIN (or LEFT JOIN) returns all rows from the left table, and only the matching rows from the right table. If a row from the left table has no match in the right table, the columns from the right table will appear as NULL.",
    category: "Joins"
  },
  {
    id: "9",
    question: "What is a SELF JOIN?",
    answer: "A SELF JOIN is a join where a table is joined to itself. This is used when rows in a table are related to other rows in the same table. A common example is an Employees table where you need to find an employee's manager, and the manager is also listed as an employee in the same table. You must use table aliases to distinguish the two instances of the table.",
    category: "Joins"
  },
  {
    id: "10",
    question: "What is a CROSS JOIN?",
    answer: "A CROSS JOIN returns the Cartesian product of the two tables. This means that each row from the first table is combined with every single row from the second table. If table A has 'x' rows and table B has 'y' rows, the result set will have 'x * y' rows.",
    category: "Joins"
  },
  {
    id: "11",
    question: "What is the difference between the WHERE and HAVING clauses?",
    answer: "• The WHERE clause is used to filter rows before any grouping or aggregation occurs.\n\n• The HAVING clause is used to filter groups after the GROUP BY clause has been applied. Because it operates on grouped data, you can use aggregate functions (like COUNT(*) > 1) in the HAVING clause, whereas you cannot in the WHERE clause.",
    category: "Aggregation and Filtering"
  },
  {
    id: "12",
    question: "What is the difference between COUNT(*) and COUNT(column_name)?",
    answer: "• COUNT(*) returns the total number of rows in the selected group, regardless of their values.\n\n• COUNT(column_name) returns the number of rows where the specified column_name is not NULL.",
    category: "Aggregation and Filtering"
  },
  {
    id: "13",
    question: "What is the difference between GROUP BY and DISTINCT?",
    answer: "• DISTINCT is used to return only unique (different) combinations of the specified columns. It simply filters out duplicate rows.\n\n• GROUP BY is used in conjunction with aggregate functions (like COUNT, SUM, AVG) to perform calculations on sets of rows, collapsing them into a single summary row for each group.",
    category: "Aggregation and Filtering"
  },
  {
    id: "14",
    question: "How can you use a CASE statement?",
    answer: "A CASE statement is used to implement if-then-else logic in SQL. It can be used in several places:\n\n• In a SELECT clause to return different values based on a condition (e.g., categorizing a price as 'High' or 'Low').\n\n• In an ORDER BY clause to define a custom sorting order.\n\n• In an UPDATE statement to conditionally set new values.\n\n• In aggregate functions (like SUM) to perform conditional aggregation.",
    category: "Aggregation and Filtering"
  },
  {
    id: "15",
    question: "What is a subquery?",
    answer: "A subquery is a SELECT query nested inside another DML statement. Subqueries can be used in:\n\n• The WHERE clause to filter results (e.g., WHERE Salary = (SELECT MAX(Salary) FROM Employees)).\n\n• The FROM clause, where the subquery acts like a temporary table.\n\n• The SELECT clause to return a single value (a scalar subquery).",
    category: "Subqueries and Advanced SQL"
  },
  {
    id: "16",
    question: "What is a correlated subquery?",
    answer: "A correlated subquery is a nested query that makes references to the current row of its outer query. The subquery is re-evaluated for each row being processed by the outer query.",
    category: "Subqueries and Advanced SQL"
  },
  {
    id: "17",
    question: "What is a Common Table Expression (CTE)?",
    answer: "A Common Table Expression, or CTE, is a temporary named result set defined using a WITH clause at the beginning of a query. It acts like a subquery in the FROM clause but can make the query more readable. CTEs can also be used to create recursive queries, such as for processing hierarchical data (e.g., an organizational chart).",
    category: "Subqueries and Advanced SQL"
  },
  {
    id: "18",
    question: "What is a Window Function?",
    answer: "A window function performs a calculation (like an aggregate) across a set of rows that are related to the current row, without collapsing the rows like a GROUP BY clause does. It uses an OVER() clause to define the 'window' of rows. Common examples include ROW_NUMBER(), LAG(), LEAD(), and running totals (SUM(...) OVER (ORDER BY ...)).",
    category: "Subqueries and Advanced SQL"
  },
  {
    id: "19",
    question: "What is the ROW_NUMBER() function used for?",
    answer: "ROW_NUMBER() is a window function that assigns a sequential integer to each row within its partition, based on a specified order. It is often used with PARTITION BY to restart the numbering for each group. A common use is to find the 'N most recent' or 'top N' records per group.",
    category: "Subqueries and Advanced SQL"
  },
  {
    id: "20",
    question: "What is an index?",
    answer: "An index is a data structure on disk that contains pointers to a table's data, arranged in a specific order. Its purpose is to substantially improve query performance by allowing the database to quickly find data specified in WHERE, JOIN, or ORDER BY clauses, avoiding a full table scan.",
    category: "Performance and Database Objects"
  },
  {
    id: "21",
    question: "What is the difference between a clustered and a non-clustered index?",
    answer: "• A clustered index dictates the physical order of the data in the table; the table itself is sorted according to the index. Because the data can only be sorted in one way, a table can have at most one clustered index.\n\n• A non-clustered index is a separate data structure that contains pointers to the data rows.",
    category: "Performance and Database Objects"
  },
  {
    id: "22",
    question: "What is a View?",
    answer: "A View is essentially a stored SELECT query. It can be used to project only certain columns or filter certain rows from a table. Views can also be based on complex queries involving joins and aggregations. A view does not store data itself; it runs the underlying query each time it is accessed.",
    category: "Performance and Database Objects"
  },
  {
    id: "23",
    question: "What is a Materialized View?",
    answer: "A Materialized View is a view whose results are physically stored on disk. Unlike a regular view, it is not run every time it's queried. This makes it very fast to read from, especially for complex queries. The drawback is that the data is not real-time and must be periodically refreshed to remain current.",
    category: "Performance and Database Objects"
  },
  {
    id: "24",
    question: "What is a Transaction and what is ROLLBACK?",
    answer: "A Transaction is a sequence of one or more SQL operations (like INSERT, UPDATE, DELETE) that are treated as a single, atomic unit of work.\n\n• COMMIT TRANSACTION makes all changes within the transaction permanent.\n\n• ROLLBACK TRANSACTION is used when something fails, and it undoes all the changes made since the transaction began. This is often used in a TRY...CATCH block to ensure data integrity.",
    category: "Performance and Database Objects"
  },
  {
    id: "25",
    question: "What is the logical order of processing in a SELECT statement?",
    answer: "The logical order in which a SQL query is processed is different from the order in which it is written. The general order is:\n\n1. FROM (and JOIN)\n2. ON\n3. WHERE\n4. GROUP BY\n5. HAVING\n6. SELECT\n7. DISTINCT\n8. ORDER BY\n9. TOP / LIMIT",
    category: "Performance and Database Objects"
  }
];

export const getQuestionById = (id: string): Question | undefined => {
  return sqlQuestions.find(q => q.id === id);
};

export const getRelatedQuestions = (currentId: string, excludeIds: string[], count: number = 3): Question[] => {
  return sqlQuestions
    .filter(q => q.id !== currentId && !excludeIds.includes(q.id))
    .slice(0, count);
};
