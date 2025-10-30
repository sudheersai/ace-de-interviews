export interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
  skill: string;
}

export const sqlQuestions: Question[] = [
  {
    id: "1",
    question: "What are the major sub-languages of SQL?",
    answer: "Based on the document, SQL is comprised of 3 major sub-languages:\n\n• Data Definition Language (DDL): Used to create and modify the structure of the database (e.g., CREATE TABLE).\n\n• Data Manipulation Language (DML): Used to perform read, insert, update, and delete operations on the data (e.g., SELECT, INSERT).\n\n• Data Control Language (DCL): Used to control access to the data stored in the database (e.g., GRANT, REVOKE).",
    category: "Foundational Concepts",
    skill: "SQL"
  },
  {
    id: "2",
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer: "• DELETE: This is a DML command used to remove specific rows from a table, often with a WHERE clause. If no WHERE clause is used, it deletes all rows. It is a row-by-row operation and logs each deletion.\n\n• TRUNCATE: This command deletes all rows from a table. It is much faster than DELETE for clearing a table because it ignores indexes and triggers, logs less, and resets auto-increment values. You cannot TRUNCATE specific rows.\n\n• DROP: This is a DDL command that completely deletes the database or table itself.",
    category: "Foundational Concepts",
    skill: "SQL"
  },
  {
    id: "3",
    question: "What is the difference between UNION and UNION ALL?",
    answer: "Both operators are used to combine the result sets of two or more SELECT statements.\n\n• UNION combines the results and removes duplicate rows.\n\n• UNION ALL combines the results but includes all duplicate rows. UNION ALL is faster because it does not perform the extra work of identifying and removing duplicates.",
    category: "Foundational Concepts",
    skill: "SQL"
  },
  {
    id: "4",
    question: "What is SQL Injection and how can it be prevented?",
    answer: "SQL Injection is an attack where a malicious user injects SQL code into a form field to trick the database into running unintended commands. This can be used to view private information, modify data, or even drop a database.\n\nThe best way to prevent it is to use parameters (also known as parameterized queries) instead of concatenating user input directly into a query string. This ensures the user input is treated as a value and not as executable code.",
    category: "Foundational Concepts",
    skill: "SQL"
  },
  {
    id: "5",
    question: "What is a Primary Key?",
    answer: "A Primary Key is a constraint used to uniquely identify each row in a table. Only one primary key is allowed per table. It can consist of a single column or multiple columns (which is called a composite key).",
    category: "Keys and Constraints",
    skill: "SQL"
  },
  {
    id: "6",
    question: "What is a Foreign Key?",
    answer: "A Foreign Key is a constraint that ensures data integrity by enforcing a link between data in two tables. It requires that the values in the foreign key column (in the 'child' table) must match values in a UNIQUE or PRIMARY KEY column in the 'parent' table.",
    category: "Keys and Constraints",
    skill: "SQL"
  },
  {
    id: "7",
    question: "How do you filter for NULL values in a query?",
    answer: "You must use the IS NULL or IS NOT NULL operators in the WHERE clause. You cannot use equality operators like = NULL or <> NULL because NULL represents an unknown or absent value and is not considered equal to anything, not even itself.",
    category: "Keys and Constraints",
    skill: "SQL"
  },
  {
    id: "8",
    question: "What is the difference between an INNER JOIN and a LEFT JOIN?",
    answer: "• An INNER JOIN returns only the rows that have a match in both tables. It represents the intersection of the two tables.\n\n• A LEFT OUTER JOIN (or LEFT JOIN) returns all rows from the left table, and only the matching rows from the right table. If a row from the left table has no match in the right table, the columns from the right table will appear as NULL.",
    category: "Joins",
    skill: "SQL"
  },
  {
    id: "9",
    question: "What is a SELF JOIN?",
    answer: "A SELF JOIN is a join where a table is joined to itself. This is used when rows in a table are related to other rows in the same table. A common example is an Employees table where you need to find an employee's manager, and the manager is also listed as an employee in the same table. You must use table aliases to distinguish the two instances of the table.",
    category: "Joins",
    skill: "SQL"
  },
  {
    id: "10",
    question: "What is a CROSS JOIN?",
    answer: "A CROSS JOIN returns the Cartesian product of the two tables. This means that each row from the first table is combined with every single row from the second table. If table A has 'x' rows and table B has 'y' rows, the result set will have 'x * y' rows.",
    category: "Joins",
    skill: "SQL"
  },
  {
    id: "11",
    question: "What is the difference between the WHERE and HAVING clauses?",
    answer: "• The WHERE clause is used to filter rows before any grouping or aggregation occurs.\n\n• The HAVING clause is used to filter groups after the GROUP BY clause has been applied. Because it operates on grouped data, you can use aggregate functions (like COUNT(*) > 1) in the HAVING clause, whereas you cannot in the WHERE clause.",
    category: "Aggregation and Filtering",
    skill: "SQL"
  },
  {
    id: "12",
    question: "What is the difference between COUNT(*) and COUNT(column_name)?",
    answer: "• COUNT(*) returns the total number of rows in the selected group, regardless of their values.\n\n• COUNT(column_name) returns the number of rows where the specified column_name is not NULL.",
    category: "Aggregation and Filtering",
    skill: "SQL"
  },
  {
    id: "13",
    question: "What is the difference between GROUP BY and DISTINCT?",
    answer: "• DISTINCT is used to return only unique (different) combinations of the specified columns. It simply filters out duplicate rows.\n\n• GROUP BY is used in conjunction with aggregate functions (like COUNT, SUM, AVG) to perform calculations on sets of rows, collapsing them into a single summary row for each group.",
    category: "Aggregation and Filtering",
    skill: "SQL"
  },
  {
    id: "14",
    question: "How can you use a CASE statement?",
    answer: "A CASE statement is used to implement if-then-else logic in SQL. It can be used in several places:\n\n• In a SELECT clause to return different values based on a condition (e.g., categorizing a price as 'High' or 'Low').\n\n• In an ORDER BY clause to define a custom sorting order.\n\n• In an UPDATE statement to conditionally set new values.\n\n• In aggregate functions (like SUM) to perform conditional aggregation.",
    category: "Aggregation and Filtering",
    skill: "SQL"
  },
  {
    id: "15",
    question: "What is a subquery?",
    answer: "A subquery is a SELECT query nested inside another DML statement. Subqueries can be used in:\n\n• The WHERE clause to filter results (e.g., WHERE Salary = (SELECT MAX(Salary) FROM Employees)).\n\n• The FROM clause, where the subquery acts like a temporary table.\n\n• The SELECT clause to return a single value (a scalar subquery).",
    category: "Subqueries and Advanced SQL",
    skill: "SQL"
  },
  {
    id: "16",
    question: "What is a correlated subquery?",
    answer: "A correlated subquery is a nested query that makes references to the current row of its outer query. The subquery is re-evaluated for each row being processed by the outer query.",
    category: "Subqueries and Advanced SQL",
    skill: "SQL"
  },
  {
    id: "17",
    question: "What is a Common Table Expression (CTE)?",
    answer: "A Common Table Expression, or CTE, is a temporary named result set defined using a WITH clause at the beginning of a query. It acts like a subquery in the FROM clause but can make the query more readable. CTEs can also be used to create recursive queries, such as for processing hierarchical data (e.g., an organizational chart).",
    category: "Subqueries and Advanced SQL",
    skill: "SQL"
  },
  {
    id: "18",
    question: "What is a Window Function?",
    answer: "A window function performs a calculation (like an aggregate) across a set of rows that are related to the current row, without collapsing the rows like a GROUP BY clause does. It uses an OVER() clause to define the 'window' of rows. Common examples include ROW_NUMBER(), LAG(), LEAD(), and running totals (SUM(...) OVER (ORDER BY ...)).",
    category: "Subqueries and Advanced SQL",
    skill: "SQL"
  },
  {
    id: "19",
    question: "What is the ROW_NUMBER() function used for?",
    answer: "ROW_NUMBER() is a window function that assigns a sequential integer to each row within its partition, based on a specified order. It is often used with PARTITION BY to restart the numbering for each group. A common use is to find the 'N most recent' or 'top N' records per group.",
    category: "Subqueries and Advanced SQL",
    skill: "SQL"
  },
  {
    id: "20",
    question: "What is an index?",
    answer: "An index is a data structure on disk that contains pointers to a table's data, arranged in a specific order. Its purpose is to substantially improve query performance by allowing the database to quickly find data specified in WHERE, JOIN, or ORDER BY clauses, avoiding a full table scan.",
    category: "Performance and Database Objects",
    skill: "SQL"
  },
  {
    id: "21",
    question: "What is the difference between a clustered and a non-clustered index?",
    answer: "• A clustered index dictates the physical order of the data in the table; the table itself is sorted according to the index. Because the data can only be sorted in one way, a table can have at most one clustered index.\n\n• A non-clustered index is a separate data structure that contains pointers to the data rows.",
    category: "Performance and Database Objects",
    skill: "SQL"
  },
  {
    id: "22",
    question: "What is a View?",
    answer: "A View is essentially a stored SELECT query. It can be used to project only certain columns or filter certain rows from a table. Views can also be based on complex queries involving joins and aggregations. A view does not store data itself; it runs the underlying query each time it is accessed.",
    category: "Performance and Database Objects",
    skill: "SQL"
  },
  {
    id: "23",
    question: "What is a Materialized View?",
    answer: "A Materialized View is a view whose results are physically stored on disk. Unlike a regular view, it is not run every time it's queried. This makes it very fast to read from, especially for complex queries. The drawback is that the data is not real-time and must be periodically refreshed to remain current.",
    category: "Performance and Database Objects",
    skill: "SQL"
  },
  {
    id: "24",
    question: "What is a Transaction and what is ROLLBACK?",
    answer: "A Transaction is a sequence of one or more SQL operations (like INSERT, UPDATE, DELETE) that are treated as a single, atomic unit of work.\n\n• COMMIT TRANSACTION makes all changes within the transaction permanent.\n\n• ROLLBACK TRANSACTION is used when something fails, and it undoes all the changes made since the transaction began. This is often used in a TRY...CATCH block to ensure data integrity.",
    category: "Performance and Database Objects",
    skill: "SQL"
  },
  {
    id: "25",
    question: "What is the logical order of processing in a SELECT statement?",
    answer: "The logical order in which a SQL query is processed is different from the order in which it is written. The general order is:\n\n1. FROM (and JOIN)\n2. ON\n3. WHERE\n4. GROUP BY\n5. HAVING\n6. SELECT\n7. DISTINCT\n8. ORDER BY\n9. TOP / LIMIT",
    category: "Performance and Database Objects",
    skill: "SQL"
  },
  {
    id: "pyspark-1",
    question: "What is PySpark?",
    answer: "PySpark is the Python API for Apache Spark. It allows you to use Python to interface with Spark's features, such as Spark SQL, Spark Streaming, MLlib, and Spark Core. It's used to process structured and semi-structured data sets and can read from many data sources. It uses the py4j library to collaborate between Spark (which runs on the JVM) and Python.",
    category: "PySpark Fundamentals",
    skill: "Pyspark"
  },
  {
    id: "pyspark-2",
    question: "What is the difference between an RDD, a DataFrame, and a DataSet?",
    answer: "These are the core data abstractions in Spark:\n\n• RDD (Resilient Distributed Dataset): This is the fundamental data structure of Spark. It's an immutable, fault-tolerant, distributed collection of objects that can be operated on in parallel. You use RDDs when you need low-level transformations and control over your dataset.\n\n• DataFrame: This is a distributed collection of data organized into named columns. It is conceptually equivalent to a table in a relational database. It provides a domain-specific language for manipulating structured data and is optimized by the Catalyst optimizer.\n\n• DataSet: This is described as a subset of DataFrames. Datasets are a highly-typed collection of domain-specific objects and provide the best of both RDDs and DataFrames, offering optimization and compile-time type safety. (Note: Datasets are not fully available in PySpark, which is a Python API, as Python is not type-safe at compile-time like Scala is).",
    category: "PySpark Fundamentals",
    skill: "Pyspark"
  },
  {
    id: "pyspark-3",
    question: "What is an RDD?",
    answer: "RDD stands for Resilient Distributed Dataset. It is the fundamental, fault-tolerant data structure in Spark. RDDs are immutable collections of objects that are distributed across the nodes of a cluster and can be operated on in parallel. They are fault-tolerant because they track their lineage (a graph of transformations) and can rebuild lost data.",
    category: "PySpark Fundamentals",
    skill: "Pyspark"
  },
  {
    id: "pyspark-4",
    question: "What are Transformations and Actions in Spark?",
    answer: "RDDs support two types of operations:\n\n• Transformations: These are operations performed on an RDD that create a new RDD. Transformations are 'lazy,' meaning they are not computed immediately. Examples include map(), filter(), join(), and union().\n\n• Actions: These are operations that return a value to the driver program after running a computation on an RDD. An action is what triggers the execution of all the 'lazy' transformations. Examples include reduce(), count(), first(), and collect().",
    category: "PySpark Fundamentals",
    skill: "Pyspark"
  },
  {
    id: "pyspark-5",
    question: "What is Lazy Evaluation?",
    answer: "Lazy evaluation means that when a transformation (like map()) is called on an RDD, the operation is not performed instantly. Spark 'remembers' the instructions. Transformations are only evaluated when an action is called. This helps Spark optimize the overall data processing workflow, for example, by pipelining operations together.",
    category: "PySpark Fundamentals",
    skill: "Pyspark"
  },
  {
    id: "pyspark-6",
    question: "What is SparkContext?",
    answer: "The SparkContext is the main entry point for Spark functionality. It represents the connection to a Spark cluster and can be used to create RDDs and broadcast variables. It uses the py4j library to launch a JVM and create a JavaSparkContext. By default, SparkContext is available as the variable sc in the shell.",
    category: "Spark Architecture",
    skill: "Pyspark"
  },
  {
    id: "pyspark-7",
    question: "What is SparkSession?",
    answer: "SparkSession, introduced in Spark 2.0, is a unified entry point that replaces the older contexts like SQLContext and HiveContext. It is the programmatic way to access PySpark features and is used to create DataFrames and RDDs. If you are not in the shell, you must create a SparkSession using the builder pattern.",
    category: "Spark Architecture",
    skill: "Pyspark"
  },
  {
    id: "pyspark-8",
    question: "How can you create a DataFrame?",
    answer: "There are several ways. The document highlights creating one from an existing RDD using the toDF() function. You can call rdd.toDF() to create a DataFrame with default column names (_1, _2) or rdd.toDF(columns) to specify the column names. You can also create one programmatically by creating an RDD of Row objects and applying a schema (a StructType) using spark.createDataFrame(rdd, schema).",
    category: "DataFrames",
    skill: "Pyspark"
  },
  {
    id: "pyspark-9",
    question: "What are StructType and StructField?",
    answer: "StructType and StructField are classes in pyspark.sql.types used to programmatically define the schema for a DataFrame.\n\n• StructField defines a single column, including its name (string), data type (DataType), and whether it's nullable (boolean).\n\n• StructType is a collection of StructField objects that defines the entire structure of the DataFrame.",
    category: "DataFrames",
    skill: "Pyspark"
  },
  {
    id: "pyspark-10",
    question: "What is the difference between map() and flatMap()?",
    answer: "• map(func) is a transformation that applies a function to each element of an RDD/DStream and returns a new RDD/DStream of the same size. It's a one-to-one mapping (one input element produces one output element).\n\n• flatMap(func) is similar to map, but the function can return 0, 1, or more elements for each input element. The result is 'flattened' into a new RDD. A common example is splitting lines of text into individual words.",
    category: "Transformations",
    skill: "Pyspark"
  },
  {
    id: "pyspark-11",
    question: "How do you handle duplicate rows in a DataFrame?",
    answer: "There are two main functions:\n\n• distinct(): This function is used to remove rows that are duplicates across all columns.\n\n• dropDuplicates(): This function can be used to either drop rows that are duplicates across all columns (just like distinct()) or to drop rows that are duplicates based on a subset of specified columns.",
    category: "DataFrames",
    skill: "Pyspark"
  },
  {
    id: "pyspark-12",
    question: "What are the different types of Joins in PySpark?",
    answer: "PySpark DataFrames support multiple SQL join types. The join() method takes a how parameter to specify the type. The main types are:\n\n• inner (default)\n• outer, full, full_outer\n• left, left_outer\n• right, right_outer\n• left_semi\n• left_anti\n• cross",
    category: "DataFrames",
    skill: "Pyspark"
  },
  {
    id: "pyspark-13",
    question: "What is a UDF (User Defined Function)?",
    answer: "A UDF (User Defined Function) is a feature of PySpark SQL used to expand the built-in capabilities. You define a regular Python function and then wrap it using the udf() function from pyspark.sql.functions. This allows you to register and use your custom Python logic on DataFrame columns.",
    category: "Advanced PySpark",
    skill: "Pyspark"
  },
  {
    id: "pyspark-14",
    question: "What is Partitioning in PySpark?",
    answer: "Partitioning is the process of splitting a large dataset into smaller, more manageable parts called partitions. Transformations on partitioned data can run faster because they are executed in parallel on different nodes. PySpark supports partitioning data in memory (DataFrame) and on disk (File system).",
    category: "Performance",
    skill: "Pyspark"
  },
  {
    id: "pyspark-15",
    question: "What is the coalesce() function used for?",
    answer: "The coalesce() method is used to reduce the number of partitions in a DataFrame or RDD. This is often useful after a filter() operation, which can leave many partitions empty. coalesce() avoids a full shuffle of the data and is more efficient than repartition() when you are only decreasing the number of partitions.",
    category: "Performance",
    skill: "Pyspark"
  },
  {
    id: "pyspark-16",
    question: "What is Shuffling?",
    answer: "Shuffling is the process of redistributing data across different partitions, which may involve moving data across executors on different nodes. Shuffling is a costly and complex operation. It occurs during operations that require data from other partitions to be combined, such as reduceByKey, groupByKey, and join().",
    category: "Performance",
    skill: "Pyspark"
  },
  {
    id: "pyspark-17",
    question: "What is Caching (Persistence)?",
    answer: "Caching, also known as Persistence, is an optimization technique for Spark computations. You can use the .cache() or .persist() methods to save an RDD or DStream's data in memory. If this data is needed multiple times, Spark will reuse it from the cache instead of recomputing it, which saves time and lowers costs.",
    category: "Performance",
    skill: "Pyspark"
  },
  {
    id: "pyspark-18",
    question: "What are the different persistence levels?",
    answer: "The .persist() method allows you to specify a StorageLevel. The different levels include:\n\n• MEMORY_ONLY: (Default) Stores RDD as deserialized Java objects in the JVM. If it doesn't fit, partitions are recomputed as needed.\n\n• MEMORY_ONLY_SER: Stores RDD as serialized Java objects. This is more space-efficient but slower due to serialization.\n\n• MEMORY_AND_DISK: Stores RDD in memory. Partitions that don't fit are stored on disk.\n\n• MEMORY_AND_DISK_SER: Same as MEMORY_AND_DISK, but with serialized data.\n\n• DISK_ONLY: Stores all partitions only on disk.\n\n• OFF_HEAP: Stores data in off-heap memory as serialized objects.",
    category: "Performance",
    skill: "Pyspark"
  },
  {
    id: "pyspark-19",
    question: "What is a Broadcast Variable?",
    answer: "A broadcast variable is a read-only shared variable that is cached on each node in the cluster only once, rather than being shipped with every task. This is used to efficiently give every node a copy of a large input dataset (like a lookup table) and reduces communication costs. You create one using sc.broadcast(variable).",
    category: "Advanced PySpark",
    skill: "Pyspark"
  },
  {
    id: "pyspark-20",
    question: "What is an Accumulator?",
    answer: "Accumulators are variables used for aggregating information across the executors in a parallel manner. Only the driver can read the accumulator's value; tasks can only 'add' to it. They are useful for diagnostic purposes, like counting how many records are corrupted or how many times an API was called.",
    category: "Advanced PySpark",
    skill: "Pyspark"
  },
  {
    id: "pyspark-21",
    question: "What is Checkpointing?",
    answer: "Checkpointing is a feature that makes streaming applications resilient to failures. It involves saving data and metadata to a fault-tolerant storage directory (like HDFS). If the application fails, Spark can recover this data and resume from where it left off. There are two types:\n\n• Metadata checkpointing: Saving configurations, DStream operations, and incomplete batches.\n\n• Data checkpointing: Saving the RDD itself to secure storage, which is needed for some stateful transformations.",
    category: "Spark Streaming",
    skill: "Pyspark"
  },
  {
    id: "pyspark-22",
    question: "What is a Lineage Graph (or DAG)?",
    answer: "A Lineage Graph, also called an RDD operator graph or dependency graph, is a graph of all the dependencies between an existing RDD and the new RDDs created from it. Spark records this graph rather than the actual data. If any data is lost (since Spark doesn't replicate data in memory), it can be rebuilt by replaying the transformations in the lineage graph.",
    category: "Spark Architecture",
    skill: "Pyspark"
  },
  {
    id: "pyspark-23",
    question: "How is Apache Spark different from MapReduce?",
    answer: "The key differences are:\n\n• Processing: Spark can handle data in both real-time (streaming) and batch mode, while MapReduce is only for batch processing.\n\n• Speed: Spark is much faster. It stores data in-memory (RAM) for processing, whereas MapReduce is heavily disk-dependent, storing data in HDFS, which is slower to retrieve.\n\n• Latency: Spark is a low-latency platform due to in-memory caching, while MapReduce is a high-latency framework.",
    category: "Spark Architecture",
    skill: "Pyspark"
  },
  {
    id: "pyspark-24",
    question: "What are the main components of the Spark Ecosystem?",
    answer: "The Spark ecosystem has three main categories:\n\n• Language Support: Java, Python, Scala, and R.\n\n• Core Components: Spark Core, Spark SQL, Spark Streaming, Spark MLlib, and GraphX.\n\n• Cluster Management: Standalone, Apache Mesos, Hadoop YARN, and Kubernetes.",
    category: "Spark Architecture",
    skill: "Pyspark"
  },
  {
    id: "pyspark-25",
    question: "What is the Catalyst Optimizer?",
    answer: "The Catalyst Optimizer is Spark SQL's extensible query optimizer. When you write a DataFrame query or a SQL query, the Catalyst Optimizer leverages advanced programming features to build and optimize a plan for execution. This process involves steps like Analysis (creating a logical plan), Logical Optimization, Physical Planning (selecting a physical plan using a cost model), and Code Generation (which generates RDDs).",
    category: "Advanced PySpark",
    skill: "Pyspark"
  }
];

export const getQuestionById = (id: string): Question | undefined => {
  return sqlQuestions.find(q => q.id === id);
};

export const getRelatedQuestions = (currentId: string, excludeIds: string[], count: number = 3): Question[] => {
  const currentQuestion = getQuestionById(currentId);
  if (!currentQuestion) return [];
  
  // First try to get questions from the same skill
  const sameSkillQuestions = sqlQuestions
    .filter(q => q.skill === currentQuestion.skill && q.id !== currentId && !excludeIds.includes(q.id))
    .slice(0, count);
    
  // If we don't have enough, fill with other questions
  if (sameSkillQuestions.length < count) {
    const remaining = sqlQuestions
      .filter(q => q.id !== currentId && !excludeIds.includes(q.id) && !sameSkillQuestions.find(sq => sq.id === q.id))
      .slice(0, count - sameSkillQuestions.length);
    return [...sameSkillQuestions, ...remaining];
  }
  
  return sameSkillQuestions;
};
