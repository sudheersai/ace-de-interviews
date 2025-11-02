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
  },
  // Data Warehousing Questions
  {
    id: "dw-1",
    question: "What is a Data Warehouse?",
    answer: "A Data Warehouse is a centralized system that stores integrated data from multiple sources, optimized for analysis and reporting rather than transaction processing.\n\nExample: A retail company collects data from sales systems, CRM, and inventory apps — then stores it in a warehouse (like Snowflake) for analyzing customer purchase patterns.\n\nKey Point: Mention integration, time-variant, non-volatile properties.",
    category: "Foundational Concepts",
    skill: "Data Warehousing"
  },
  {
    id: "dw-2",
    question: "Why do companies need a Data Warehouse?",
    answer: "To consolidate data for decision-making, reporting, and analytics instead of querying multiple systems individually.\n\nExample: Marketing uses warehouse data to see customer trends and optimize campaigns.\n\nKey Point: Helps in data-driven decision-making and cross-departmental reporting.",
    category: "Foundational Concepts",
    skill: "Data Warehousing"
  },
  {
    id: "dw-3",
    question: "What is the difference between Data Warehouse and Database?",
    answer: "• Database: Used for daily operations (OLTP), normalized schema, stores current data\n• Data Warehouse: Used for analytics & reporting (OLAP), denormalized schema, stores historical data\n\nExample: Customer order system = database; company-wide sales dashboard = data warehouse.\n\nKey Point: OLTP vs OLAP use case clarity.",
    category: "Foundational Concepts",
    skill: "Data Warehousing"
  },
  {
    id: "dw-4",
    question: "Explain ETL with a real-world example.",
    answer: "ETL = Extract, Transform, Load — process of moving data from source systems into the warehouse.\n\nExample:\n1. Extract: Pull daily sales from POS system\n2. Transform: Convert currency, clean nulls\n3. Load: Insert into Snowflake sales table\n\nKey Point: Show understanding of data pipeline automation.",
    category: "ETL & Data Integration",
    skill: "Data Warehousing"
  },
  {
    id: "dw-5",
    question: "Difference between ETL and ELT",
    answer: "In ETL, data is transformed before loading; in ELT, raw data is loaded and transformed later inside the warehouse.\n\nExample:\n• ETL: Informatica performs transformation → data enters DB\n• ELT: Raw data lands in BigQuery → SQL transformations applied later\n\nKey Point: Cloud data warehouses prefer ELT.",
    category: "ETL & Data Integration",
    skill: "Data Warehousing"
  },
  {
    id: "dw-6",
    question: "What are Slowly Changing Dimensions (SCD)?",
    answer: "They manage how historical data changes over time in dimension tables.\n\nExample: A customer changes address:\n• Type 1 → overwrite old value\n• Type 2 → keep both records with date range\n• Type 3 → add new column for 'previous address'\n\nKey Point: Most companies use Type 2 for audit history.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-7",
    question: "Explain Star Schema with an example.",
    answer: "Central Fact table connected to Dimension tables.\n\nExample: Fact_Sales linked to Dim_Customer, Dim_Product, Dim_Date.\n\nKey Point: Optimized for query performance in OLAP.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-8",
    question: "Difference between Star and Snowflake Schema",
    answer: "• Star: Dimensions not normalized (simpler, faster)\n• Snowflake: Dimensions normalized (saves space)\n\nExample: Product dimension split into Product, Category, and Supplier tables = Snowflake.\n\nKey Point: Mention trade-off between performance and storage.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-9",
    question: "What is Data Lake vs Data Warehouse?",
    answer: "• Data Lake: Stores raw data (structured/unstructured)\n• Data Warehouse: Stores structured, processed data\n\nExample:\nRaw IoT sensor logs → Data Lake\nCleaned and summarized logs → Warehouse",
    category: "Foundational Concepts",
    skill: "Data Warehousing"
  },
  {
    id: "dw-10",
    question: "What are Fact and Dimension Tables?",
    answer: "• Fact Table: Contains measurable data (sales, revenue)\n• Dimension Table: Descriptive context (customer, product, time)\n\nExample: Fact_Sales(amount, product_id) joins with Dim_Product(name).\n\nKey Point: Facts = numeric measures; Dimensions = business context.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-11",
    question: "What is OLAP vs OLTP?",
    answer: "• OLAP supports analytics, OLTP supports transactions\n\nExample:\n• OLTP: Bank deposits\n• OLAP: Bank's monthly transaction report\n\nKey Point: OLAP = Read-heavy; OLTP = Write-heavy.",
    category: "Foundational Concepts",
    skill: "Data Warehousing"
  },
  {
    id: "dw-12",
    question: "What is a Data Mart?",
    answer: "Subset of data warehouse focused on a department or business function.\n\nExample: Finance Mart, Sales Mart.\n\nKey Point: Speeds up queries for domain-specific reporting.",
    category: "Architecture",
    skill: "Data Warehousing"
  },
  {
    id: "dw-13",
    question: "What is Data Mining and how is it related to Data Warehousing?",
    answer: "Data Mining extracts patterns from warehouse data for prediction.\n\nExample: Analyzing warehouse data to find which customers buy most on weekends.\n\nKey Point: Mining uses warehouse data for insights.",
    category: "Analytics",
    skill: "Data Warehousing"
  },
  {
    id: "dw-14",
    question: "Explain Incremental Load.",
    answer: "Loads only new or changed data since the last update.\n\nExample: Using last_updated_date to load only yesterday's new sales.\n\nKey Point: Efficient for large datasets.",
    category: "ETL & Data Integration",
    skill: "Data Warehousing"
  },
  {
    id: "dw-15",
    question: "What is a Data Cube?",
    answer: "Multidimensional view of data used for fast OLAP queries.\n\nExample: Sales analyzed by Product, Region, and Time.\n\nKey Point: Supports drill-down and roll-up operations.",
    category: "Analytics",
    skill: "Data Warehousing"
  },
  {
    id: "dw-16",
    question: "What are ACID Properties?",
    answer: "Atomicity, Consistency, Isolation, Durability — ensure reliable transactions.\n\nExample: Bank transfer completes fully or not at all (atomic).",
    category: "Database Concepts",
    skill: "Data Warehousing"
  },
  {
    id: "dw-17",
    question: "Difference between Normalization and Denormalization",
    answer: "• Normalization: Reduces redundancy, improves consistency\n• Denormalization: Adds redundancy to improve read speed\n\nExample: OLTP = normalized; Warehouse = denormalized.\n\nKey Point: Denormalization is better for reporting.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-18",
    question: "What is a Three-Tier Data Warehouse Architecture?",
    answer: "1. Bottom Tier: Data sources and staging\n2. Middle Tier: OLAP server\n3. Top Tier: Reporting tools\n\nExample: ETL → Snowflake → Power BI.\n\nKey Point: Separates storage, processing, and presentation layers.",
    category: "Architecture",
    skill: "Data Warehousing"
  },
  {
    id: "dw-19",
    question: "What are common ETL tools?",
    answer: "• Informatica\n• Talend\n• Pentaho\n• SSIS\n• DataStage\n\nExample: SSIS pipeline loads daily sales into Azure SQL DW.\n\nKey Point: Mention any tool you have hands-on with.",
    category: "ETL & Data Integration",
    skill: "Data Warehousing"
  },
  {
    id: "dw-20",
    question: "What are common Cloud Data Warehouses?",
    answer: "Snowflake, AWS Redshift, Google BigQuery, Azure Synapse.\n\nExample: E-commerce firm uses Redshift for monthly KPIs.\n\nKey Point: Highlight your preferred platform.",
    category: "Cloud Technologies",
    skill: "Data Warehousing"
  },
  {
    id: "dw-21",
    question: "What is a Hybrid Storage Model?",
    answer: "Mixes row and column storage for OLTP + OLAP performance.\n\nExample: SQL Server with columnstore indexes.\n\nKey Point: Balances speed for both transactional and analytical workloads.",
    category: "Architecture",
    skill: "Data Warehousing"
  },
  {
    id: "dw-22",
    question: "Explain a Real-Time Data Warehouse Use Case.",
    answer: "Streaming data ingestion for dashboards.\n\nExample: Using Kafka → Snowflake Streams → Real-time sales dashboard in Power BI.\n\nKey Point: Emphasize low-latency ingestion setup.",
    category: "Real-Time Processing",
    skill: "Data Warehousing"
  },
  {
    id: "dw-23",
    question: "How do you ensure Data Quality in ETL?",
    answer: "Use validation checks, null handling, data profiling.\n\nExample: Reject records with missing customer_id in SSIS.\n\nKey Point: Show awareness of data accuracy and consistency.",
    category: "Data Quality",
    skill: "Data Warehousing"
  },
  {
    id: "dw-24",
    question: "What is Metadata in a Data Warehouse?",
    answer: "Metadata is 'data about data' — defines data origin, format, and lineage.\n\nExample: ETL log showing 'sales.csv → transformed → loaded to Dim_Sales.'\n\nKey Point: Metadata is critical for governance and auditing.",
    category: "Data Governance",
    skill: "Data Warehousing"
  },
  {
    id: "dw-25",
    question: "What are Common Data Warehouse Challenges?",
    answer: "• Data inconsistency\n• Long ETL time\n• Schema changes\n• Performance issues\n\nKey Point: Mention use of incremental loads, partitioning, and indexes to optimize.",
    category: "Performance Optimization",
    skill: "Data Warehousing"
  },
  {
    id: "dw-26",
    question: "What is Partitioning and why use it?",
    answer: "Dividing large tables into smaller segments for performance.\n\nExample: Partition Fact_Sales by month to speed up queries.\n\nKey Point: Improves query speed and maintenance.",
    category: "Performance Optimization",
    skill: "Data Warehousing"
  },
  {
    id: "dw-27",
    question: "What are Surrogate Keys?",
    answer: "Artificial keys used instead of business keys for dimension tables.\n\nExample: Customer_SK instead of Customer_ID (natural key).\n\nKey Point: Prevents dependency on source system changes.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-28",
    question: "Explain Slowly Changing Fact Tables.",
    answer: "Facts can change over time — handled with versioning or effective dates.\n\nExample: Sales amounts updated due to discounts.\n\nKey Point: Use effective_date and expiry_date for tracking.",
    category: "Data Modeling",
    skill: "Data Warehousing"
  },
  {
    id: "dw-29",
    question: "What is Data Lineage and why is it important?",
    answer: "Tracks data flow from source to destination through transformations.\n\nExample: Customer data → ETL → Cleansed → Warehouse → Dashboard.\n\nKey Point: Crucial for auditing, debugging, and compliance.",
    category: "Data Governance",
    skill: "Data Warehousing"
  },
  {
    id: "dw-30",
    question: "How to optimize Data Warehouse performance?",
    answer: "Use indexes, partitions, materialized views, and query optimization.\n\nExample: Create indexes on frequently queried columns.\n\nKey Point: Balance between storage and query performance.",
    category: "Performance Optimization",
    skill: "Data Warehousing"
  },
  // Data Modeling Questions
  {
    id: "dm-1",
    question: "What is Data Modeling?",
    answer: "Data modeling is the process of organizing and structuring data so it can be stored and used efficiently. It's like creating a map of how data will be stored in a database.\n\nSimple Example: Imagine you run an online bookstore. You'll have data about books, customers, and orders. A data model helps define how these are connected — for example, one customer can have many orders, and each order can include multiple books.\n\nWhy It's Important: It makes it easier for developers, analysts, and businesses to understand, use, and analyze data.",
    category: "Foundational Concepts",
    skill: "Data Modeling"
  },
  {
    id: "dm-2",
    question: "What is the difference between Logical and Physical Data Models?",
    answer: "• Logical Model: Describes what data is needed and the relationships between them. It's a high-level view without technical details.\n• Physical Model: Describes how and where data will actually be stored in a database, including tables, columns, and data types.\n\nExample:\nLogical – We have an entity called 'Customer' with Name and Email.\nPhysical – We create a table Customer with columns customer_name VARCHAR(50) and email VARCHAR(100).\n\nWhy It's Important: Logical models help communicate with business teams; physical models help database engineers build the actual system.",
    category: "Foundational Concepts",
    skill: "Data Modeling"
  },
  {
    id: "dm-3",
    question: "What are Entities, Attributes, and Relationships?",
    answer: "• Entity: A thing you want to store information about (like Customer, Product, or Order)\n• Attribute: A detail about an entity (like Customer Name, Email, or Phone)\n• Relationship: How two entities are connected (e.g., one customer can place many orders)\n\nExample: A Customer places an Order for a Product → this shows relationships.\n\nWhy It's Important: It helps define clear links between data for easy querying and analysis.",
    category: "Foundational Concepts",
    skill: "Data Modeling"
  },
  {
    id: "dm-4",
    question: "What is Cardinality and Modality?",
    answer: "• Cardinality: defines how many relationships exist (e.g., one-to-one, one-to-many, many-to-many)\n• Modality: shows whether a relationship is required or optional\n\nExample: A customer must have at least one order (mandatory), but an order can have multiple products (many-to-many).\n\nWhy It's Important: It helps determine how data tables connect, ensuring accuracy and integrity.",
    category: "Relationships",
    skill: "Data Modeling"
  },
  {
    id: "dm-5",
    question: "What is an ER Diagram and why is it used?",
    answer: "An Entity-Relationship Diagram visually represents entities, their attributes, and relationships in a database.\n\nWhy It's Important: Makes it easy to understand database structure and communicate designs with stakeholders.",
    category: "Design Tools",
    skill: "Data Modeling"
  },
  {
    id: "dm-6",
    question: "What is a Database Index and why is it important?",
    answer: "An index makes searching and retrieving data faster, just like a book's index helps find pages quickly.\n\nExample: If you frequently search customers by their email, you can create an index on the 'email' column.\n\nWhy It's Important: Improves query performance, especially for large datasets.",
    category: "Performance",
    skill: "Data Modeling"
  },
  {
    id: "dm-7",
    question: "What are the different types of Indexes?",
    answer: "• B-Tree Index: Great for sorting and range queries\n• Hash Index: Fast for exact matches (like finding a customer by ID)\n• Bitmap Index: Best for low-cardinality columns (like Gender = M/F)\n• Composite Index: Combines multiple columns\n\nExample: Use a composite index on (CustomerID, OrderDate) for queries involving both fields.",
    category: "Performance",
    skill: "Data Modeling"
  },
  {
    id: "dm-8",
    question: "What is Data Partitioning?",
    answer: "Data partitioning means dividing a large table into smaller parts (partitions) for better performance and easier management.\n\nExample: Partitioning sales data by month, so when querying January data, only the January partition is scanned.\n\nWhy It's Important:\n• Improves query performance\n• Easier to maintain large datasets\n• Helps parallel processing",
    category: "Performance",
    skill: "Data Modeling"
  },
  {
    id: "dm-9",
    question: "What are Primary and Foreign Keys?",
    answer: "• Primary Key: A unique identifier for each record in a table (e.g., CustomerID)\n• Foreign Key: A link to the primary key in another table, maintaining relationships between data\n\nExample: In the Orders table, CustomerID is a foreign key linked to the Customer table's primary key.\n\nWhy It's Important: Ensures data integrity and prevents duplicates.",
    category: "Keys and Constraints",
    skill: "Data Modeling"
  },
  {
    id: "dm-10",
    question: "What is the difference between Natural and Surrogate Keys?",
    answer: "• Natural Key: Exists naturally in the data (like Social Security Number)\n• Surrogate Key: Artificial key created for the database (like an auto-increment ID)\n\nWhy It's Important: Surrogate keys provide stability and don't depend on business data changes.",
    category: "Keys and Constraints",
    skill: "Data Modeling"
  },
  {
    id: "dm-11",
    question: "What are Fact and Dimension Tables?",
    answer: "Fact Table: Stores numeric, measurable data (like sales, revenue, quantity)\nDimension Table: Stores descriptive data (like product name, customer info)\n\nExample:\n• Fact Table → Sales_Fact (sales_amount, quantity)\n• Dimension Table → Product_Dim (product_id, name, category)\n\nWhy It's Important: This structure makes it easy to analyze data in business intelligence tools like Power BI.",
    category: "Star Schema",
    skill: "Data Modeling"
  },
  {
    id: "dm-12",
    question: "What is a Star Schema?",
    answer: "A Star Schema has a central fact table linked directly to multiple dimension tables.\n\nExample: Sales_Fact connected to Customer_Dim, Product_Dim, and Time_Dim.\n\nWhy It's Important:\n• Simple and fast for queries\n• Easy for reporting and dashboards",
    category: "Star Schema",
    skill: "Data Modeling"
  },
  {
    id: "dm-13",
    question: "What is a Snowflake Schema?",
    answer: "A Snowflake Schema is similar to a Star Schema but with normalized dimension tables.\n\nExample: Instead of storing all product details in one table, you split it into Product and Category tables.\n\nWhy It's Important: Reduces data duplication but makes queries slightly slower.\n\nWhen to Use: When saving storage space is more important than query speed.",
    category: "Snowflake Schema",
    skill: "Data Modeling"
  },
  {
    id: "dm-14",
    question: "What is a Galaxy Schema?",
    answer: "Also called a Fact Constellation, it has multiple fact tables that share dimension tables.\n\nExample: Sales_Fact and Inventory_Fact share Product_Dim and Time_Dim.\n\nWhy It's Important: Used in enterprise systems with multiple business processes like sales, marketing, and inventory.",
    category: "Advanced Schemas",
    skill: "Data Modeling"
  },
  {
    id: "dm-15",
    question: "What are Slowly Changing Dimensions (SCDs)?",
    answer: "SCDs handle changes in dimension data over time (like customer address changes).\n\nTypes:\n• Type 1: Overwrite old data (no history)\n• Type 2: Add a new record for every change (keeps history)\n• Type 3: Add new column for previous value\n\nExample: If a customer moves to a new city, Type 2 adds a new row, so history is preserved.\n\nWhy It's Important: Keeps accurate historical data for analytics.",
    category: "Slowly Changing Dimensions",
    skill: "Data Modeling"
  },
  {
    id: "dm-16",
    question: "What is Denormalization and why do we use it?",
    answer: "Denormalization means combining related tables to reduce joins and improve read performance.\n\nExample: Instead of separate tables for Customer and Address, merge them if queries always need both.\n\nWhy It's Important:\n• Speeds up data retrieval\n• Simplifies reporting\n\nTrade-Off: Increases data redundancy and storage usage.",
    category: "Normalization",
    skill: "Data Modeling"
  },
  {
    id: "dm-17",
    question: "What is Normalization?",
    answer: "Normalization is organizing data to reduce duplication and improve data integrity.\n\nExample: Instead of repeating customer names in the orders table, store them once in the customer table and reference them.\n\nWhy It's Important: Saves space and ensures consistency.",
    category: "Normalization",
    skill: "Data Modeling"
  },
  {
    id: "dm-18",
    question: "What are the main types of normalization?",
    answer: "• 1NF (First Normal Form): No repeating columns\n• 2NF: No partial dependencies\n• 3NF: No transitive dependencies\n\nExample: Customer table should not have multiple phone columns (violates 1NF).",
    category: "Normalization",
    skill: "Data Modeling"
  },
  {
    id: "dm-19",
    question: "What is Data Integrity?",
    answer: "It means data is accurate, consistent, and reliable across the database.\n\nExample: If a product ID exists in the order table, it must exist in the product table too.\n\nWhy It's Important: Ensures trust in the system's data.",
    category: "Data Quality",
    skill: "Data Modeling"
  },
  {
    id: "dm-20",
    question: "What are some common data modeling interview questions?",
    answer: "You might be asked:\n• Design a data model for an online shopping platform\n• Explain the difference between Star and Snowflake schemas\n• What are Fact and Dimension tables?\n• How do you handle Slowly Changing Dimensions (SCDs)?\n• What is the role of keys in data modeling?\n\nFinal Tip: Focus on understanding why each concept is used, not just definitions. Interviewers value your ability to explain with simple, real-world examples!",
    category: "Interview Preparation",
    skill: "Data Modeling"
  },
  // GitHub Questions
  {
    id: "github-1",
    question: "What is Git?",
    answer: "Git is a tool used to track changes in your code so that you can go back to any version if something goes wrong. It helps multiple developers work on the same project at the same time without interfering with each other.\n\nSimple Example: Imagine writing an essay. Git saves every version — so if you make a mistake, you can restore an older version easily.\n\nWhy It's Important: It keeps your project safe, helps you collaborate, and prevents you from losing code.",
    category: "Fundamentals",
    skill: "GitHub"
  },
  {
    id: "github-2",
    question: "What is a Distributed Version Control System?",
    answer: "In Git, every developer has a complete copy of the project on their own computer. You don't need to be online to work. You can commit, edit, and manage changes locally, then push to a central repository when ready.\n\nExample: You can work on your code without the internet, and once you're connected, you upload your work to GitHub.\n\nWhy It's Important: It allows you to work independently and safely — even without internet access.",
    category: "Fundamentals",
    skill: "GitHub"
  },
  {
    id: "github-3",
    question: "What is Version Control in Git?",
    answer: "Version control means saving different versions of your files so you can track changes and go back if needed.\n\nExample: If you accidentally delete part of your code, you can revert to the last working version with Git.\n\nWhy It's Important: It prevents data loss and helps teams manage updates efficiently.",
    category: "Fundamentals",
    skill: "GitHub"
  },
  {
    id: "github-4",
    question: "What is the difference between Git and SVN?",
    answer: "Git is distributed and allows offline work, while SVN is centralized and requires constant server connection.\n\nComparison:\n• Type: Git (Distributed) vs SVN (Centralized)\n• Work offline: Git (Yes) vs SVN (No)\n• Speed: Git (Faster) vs SVN (Slower)\n• Branching: Git (Easy) vs SVN (Complex)\n\nWhy It's Important: Git gives developers more flexibility and better performance.",
    category: "Fundamentals",
    skill: "GitHub"
  },
  {
    id: "github-5",
    question: "What is a Repository in Git?",
    answer: "A repository is like a project folder that contains all your code files and their version history.\n\nExample: You can create a Git repo for your portfolio website to track every change you make.\n\nWhy It's Important: It's where all your work and history are saved.",
    category: "Repository Management",
    skill: "GitHub"
  },
  {
    id: "github-6",
    question: "How do you create a local Git repository?",
    answer: "Use the command: git init\n\nThis creates a new local repository in your project folder.\n\nExample: If your project folder is myapp, running git init starts tracking your files in that folder.",
    category: "Repository Management",
    skill: "GitHub"
  },
  {
    id: "github-7",
    question: "What is a Bare Repository?",
    answer: "A bare repository only stores the Git history and doesn't have actual working files. It's mainly used as a shared repo (e.g., on GitHub).\n\nExample: When you create a new repo on GitHub, it's a bare repo — other users push their changes to it.\n\nWhy It's Important: It's the central place where teams share their code.",
    category: "Repository Management",
    skill: "GitHub"
  },
  {
    id: "github-8",
    question: "How to configure your Git username and email?",
    answer: "Use these commands:\ngit config --global user.name 'Your Name'\ngit config --global user.email 'you@example.com'\n\nWhy It's Important: Every commit you make is tagged with your name and email for identification.",
    category: "Configuration",
    skill: "GitHub"
  },
  {
    id: "github-9",
    question: "What does 'git clone' do?",
    answer: "git clone is used to download a copy of an existing repository from GitHub (or any remote source) to your local system.\n\nExample: git clone https://github.com/user/project.git\n\nThis copies the entire project to your local computer.",
    category: "Basic Commands",
    skill: "GitHub"
  },
  {
    id: "github-10",
    question: "What does 'git add' do?",
    answer: "It adds files from your working directory to the staging area (preparing them for commit).\n\nExample: git add index.html adds the file before committing.\n\nWhy It's Important: It helps you choose which changes to commit.",
    category: "Basic Commands",
    skill: "GitHub"
  },
  {
    id: "github-11",
    question: "What is the Staging Area?",
    answer: "It's like a waiting room before saving your changes permanently (commit).\n\nExample: You edit 5 files but only want to commit 2 — you add those 2 files to the staging area.",
    category: "Basic Commands",
    skill: "GitHub"
  },
  {
    id: "github-12",
    question: "What does 'git commit' do?",
    answer: "It saves your changes to the local repository permanently with a message.\n\nExample: git commit -m 'Added new login feature'\n\nWhy It's Important: Every commit acts like a checkpoint in your project history.",
    category: "Basic Commands",
    skill: "GitHub"
  },
  {
    id: "github-13",
    question: "What is 'git push'?",
    answer: "git push uploads your local commits to the remote repository (like GitHub).\n\nExample: git push origin main\n\nThis sends your latest changes to the main branch on GitHub.",
    category: "Remote Operations",
    skill: "GitHub"
  },
  {
    id: "github-14",
    question: "What is 'git pull'?",
    answer: "git pull downloads and merges the latest changes from the remote repo into your local repo.\n\nExample: If a teammate updated a file, git pull gets their changes to your system.\n\nWhy It's Important: Keeps your local project up to date.",
    category: "Remote Operations",
    skill: "GitHub"
  },
  {
    id: "github-15",
    question: "What is 'git fetch'?",
    answer: "git fetch downloads new data from the remote repo but doesn't merge it automatically.\n\nExample: git fetch origin main\n\nThis gets updates but doesn't apply them yet.",
    category: "Remote Operations",
    skill: "GitHub"
  },
  {
    id: "github-16",
    question: "What is 'git merge'?",
    answer: "git merge combines changes from one branch into another.\n\nExample: If you have a new feature in a branch called feature-login, you can merge it into main.\n\nWhy It's Important: Allows integration of different development streams.",
    category: "Branching & Merging",
    skill: "GitHub"
  },
  {
    id: "github-17",
    question: "What is a Branch in Git?",
    answer: "A branch is like a separate workspace where you can make changes without affecting the main project.\n\nExample: You can create a new branch for testing features using: git branch test-feature\n\nWhy It's Important: It helps you work on multiple things at once safely.",
    category: "Branching & Merging",
    skill: "GitHub"
  },
  {
    id: "github-18",
    question: "What is a Merge Conflict?",
    answer: "A merge conflict happens when two people edit the same part of a file differently. Git doesn't know which version to keep.\n\nExample: If you change line 10 of index.html, and your teammate changes the same line, merging will cause a conflict.\n\nHow to Fix: Edit the file, decide which version to keep, then commit.",
    category: "Branching & Merging",
    skill: "GitHub"
  },
  {
    id: "github-19",
    question: "What is 'git stash'?",
    answer: "git stash saves your unfinished work temporarily so you can switch branches safely.\n\nExample: You're working on a feature but need to fix a bug — stash your changes, switch branches, fix the bug, then restore your stashed work.\n\nWhy It's Important: Prevents losing uncommitted changes.",
    category: "Advanced Commands",
    skill: "GitHub"
  },
  {
    id: "github-20",
    question: "What is the difference between 'git merge' and 'git rebase'?",
    answer: "• git merge: Combines branches by creating a new commit\n• git rebase: Reapplies your changes on top of another branch\n\nExample: Rebasing gives a cleaner history, while merging keeps the original history.\n\nWhen to use: Use merge for public branches, rebase for cleaning up local commits.",
    category: "Advanced Commands",
    skill: "GitHub"
  },
  {
    id: "github-21",
    question: "What is a Pull Request (PR)?",
    answer: "A pull request means asking someone to review and merge your branch into another branch (usually main).\n\nExample: You create a new feature branch, push it to GitHub, and open a PR for your manager to review.\n\nWhy It's Important: Enables code review and collaboration.",
    category: "Collaboration",
    skill: "GitHub"
  },
  {
    id: "github-22",
    question: "What is '.gitignore'?",
    answer: ".gitignore tells Git which files or folders to skip (like logs, temp files, or secrets).\n\nExample: Add node_modules/ to .gitignore so it's not uploaded to GitHub.\n\nWhy It's Important: Keeps your repository clean and secure.",
    category: "Configuration",
    skill: "GitHub"
  },
  {
    id: "github-23",
    question: "What are some common Git interview questions?",
    answer: "You might be asked:\n• Explain Git workflow (Working area → Staging → Local repo → Remote repo)\n• How do you resolve a merge conflict?\n• What is the difference between Git and GitHub?\n• How do you revert a commit?\n• How do you work with branches?\n\nFinal Tip: Always give real examples in interviews — for example, how you used Git to fix an issue or manage branches in a project. That shows practical understanding beyond commands!",
    category: "Interview Preparation",
    skill: "GitHub"
  },
  // Python Questions
  {
    id: "python-1",
    question: "What is Python?",
    answer: "Python is a simple, high-level programming language known for being easy to read and write. It allows developers to build web apps, analyze data, automate tasks, and even create AI models.\n\nExample: print('Hello, Python!') - This prints 'Hello, Python!' on the screen.\n\nWhy It's Important: Python's simplicity and flexibility make it one of the most used languages in tech.",
    category: "Fundamentals",
    skill: "Python"
  },
  {
    id: "python-2",
    question: "What are Variables in Python?",
    answer: "Variables are used to store information so you can use it later.\n\nExample:\nname = 'John'\nage = 25\nprint(name, age)\n\nWhy It's Important: Variables allow you to work with data dynamically.",
    category: "Fundamentals",
    skill: "Python"
  },
  {
    id: "python-3",
    question: "What are Data Types in Python?",
    answer: "Python has several data types such as:\n• int (for numbers) → 10\n• float (for decimals) → 10.5\n• str (for text) → 'Hello'\n• bool (True/False)\n\nExample:\nis_adult = True\nprice = 99.99\n\nWhy It's Important: Different types of data need to be stored and processed differently.",
    category: "Data Types",
    skill: "Python"
  },
  {
    id: "python-4",
    question: "What is a Conditional Statement?",
    answer: "Conditional statements let your code make decisions.\n\nExample:\nage = 18\nif age >= 18:\n    print('You are an adult')\nelse:\n    print('You are a minor')\n\nWhy It's Important: Enables logic and decision-making in programs.",
    category: "Control Flow",
    skill: "Python"
  },
  {
    id: "python-5",
    question: "What are Loops in Python?",
    answer: "Loops let you run the same code multiple times.\n\nExample:\nfor i in range(5):\n    print(i)\n\nOutput: 0 1 2 3 4\n\nWhy It's Important: Loops save time and reduce repetitive code.",
    category: "Control Flow",
    skill: "Python"
  },
  {
    id: "python-6",
    question: "What is a List in Python?",
    answer: "A List is used to store multiple items in one variable.\n\nExample:\nfruits = ['apple', 'banana', 'cherry']\nprint(fruits[0])\n\nOutput: apple\n\nWhy It's Important: Lists are one of the most used data structures in Python.\n\nInterview Tip: Know how to use .append() and .remove() to add or delete items.",
    category: "Data Structures",
    skill: "Python"
  },
  {
    id: "python-7",
    question: "What is a Dictionary in Python?",
    answer: "A Dictionary stores data in key-value pairs.\n\nExample:\nperson = {'name': 'Alice', 'age': 30}\nprint(person['name'])\n\nOutput: Alice\n\nWhy It's Important: It helps organize data with meaningful keys instead of just numbers.",
    category: "Data Structures",
    skill: "Python"
  },
  {
    id: "python-8",
    question: "What is a Function?",
    answer: "A function is a block of reusable code that performs a specific task.\n\nExample:\ndef greet():\n    print('Hello!')\n\ngreet()\n\nOutput: Hello!\n\nWhy It's Important: Functions make code reusable, cleaner, and easier to debug.",
    category: "Functions",
    skill: "Python"
  },
  {
    id: "python-9",
    question: "What are Classes and Objects?",
    answer: "Classes are blueprints, and objects are things created from those blueprints.\n\nExample:\nclass Car:\n    def __init__(self, brand):\n        self.brand = brand\n\nmy_car = Car('Tesla')\nprint(my_car.brand)\n\nOutput: Tesla\n\nWhy It's Important: It introduces Object-Oriented Programming (OOP), which helps organize large programs.",
    category: "Object-Oriented Programming",
    skill: "Python"
  },
  {
    id: "python-10",
    question: "What is Inheritance in Python?",
    answer: "Inheritance allows one class to use properties and methods from another class.\n\nExample:\nclass Animal:\n    def speak(self):\n        print('Animal speaks')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Dog barks')\n\nmy_dog = Dog()\nmy_dog.speak()\n\nOutput: Dog barks\n\nWhy It's Important: Promotes code reusability and organization.",
    category: "Object-Oriented Programming",
    skill: "Python"
  },
  {
    id: "python-11",
    question: "What is Encapsulation?",
    answer: "Encapsulation means hiding internal details of how an object works and only showing what's necessary.\n\nExample:\nclass Person:\n    def __init__(self, name):\n        self.__name = name  # private variable\n    \n    def get_name(self):\n        return self.__name\n\np = Person('Alice')\nprint(p.get_name())\n\nWhy It's Important: It protects sensitive data from being accessed directly.",
    category: "Object-Oriented Programming",
    skill: "Python"
  },
  {
    id: "python-12",
    question: "What are Modules and Packages?",
    answer: "A module is a Python file that contains code. A package is a collection of modules.\n\nExample:\nimport math\nprint(math.sqrt(16))\n\nOutput: 4.0\n\nWhy It's Important: Modules allow code organization and reusability.",
    category: "Modules",
    skill: "Python"
  },
  {
    id: "python-13",
    question: "What is Exception Handling?",
    answer: "It's how Python handles errors gracefully.\n\nExample:\ntry:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\n\nOutput: Cannot divide by zero\n\nWhy It's Important: It prevents your program from crashing when an error happens.",
    category: "Error Handling",
    skill: "Python"
  },
  {
    id: "python-14",
    question: "What are Libraries in Python?",
    answer: "Libraries are collections of ready-made functions and tools you can use in your programs.\n\nExamples:\n• NumPy for numbers\n• Pandas for data analysis\n• Matplotlib for visualization\n\nWhy It's Important: They save time — you don't have to write everything from scratch.",
    category: "Libraries",
    skill: "Python"
  },
  {
    id: "python-15",
    question: "What is a Real-Life Use of Python?",
    answer: "• Building websites (e.g., Django, Flask)\n• Data Science (Pandas, NumPy)\n• Automation (Scripts)\n• AI & Machine Learning (TensorFlow, PyTorch)\n\nExample:\nimport datetime\nprint(datetime.datetime.now())\n\nWhy It's Important: Shows how Python is versatile in real-world use cases.\n\nFinal Tip: When preparing for a Python interview — focus on understanding concepts, not memorizing syntax. Be ready to explain with examples!",
    category: "Applications",
    skill: "Python"
  },
  // CI/CD Questions
  {
    id: "cicd-1",
    question: "What is CI/CD?",
    answer: "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. It's a process that helps software and data engineering teams automatically test, build, and deploy their work.\n\n• Continuous Integration (CI) means every time a developer changes code, it's automatically tested to make sure it doesn't break anything.\n• Continuous Delivery/Deployment (CD) means after testing, the code can be released automatically or with one click to production.\n\nExample: If a data engineer updates a Python ETL script and pushes it to GitHub, CI will run automated tests. If everything passes, CD will deploy that script to Databricks or Snowflake.\n\nIn short: CI/CD helps deliver updates faster, with fewer errors.",
    category: "Fundamentals",
    skill: "CI/CD"
  },
  {
    id: "cicd-2",
    question: "What's the difference between CI, CD (Delivery), and CD (Deployment)?",
    answer: "• CI (Continuous Integration): Developers push code regularly. Automated tests check if it works correctly.\n• CD (Continuous Delivery): The software is always in a deployable state. Deployment is still manual.\n• CD (Continuous Deployment): Everything that passes tests goes live automatically.\n\nExample: After writing a data ingestion script, CI tests the code; CD (Delivery) keeps it ready for release, while CD (Deployment) sends it straight to production automatically.",
    category: "Fundamentals",
    skill: "CI/CD"
  },
  {
    id: "cicd-3",
    question: "Why is CI/CD important in Data Engineering?",
    answer: "Data projects involve many moving parts — like ingestion, transformation, and reports. Manual deployment can cause mistakes. CI/CD automates testing and deployment so that all stages are consistent and error-free.\n\nExample: When multiple developers work on a data lake, CI/CD ensures schema changes and transformation logic are tested before going live.\n\nBenefits:\n• Fewer manual errors\n• Faster updates\n• Consistent environments\n• Easier debugging",
    category: "Fundamentals",
    skill: "CI/CD"
  },
  {
    id: "cicd-4",
    question: "How does CI/CD improve data pipelines?",
    answer: "CI/CD helps you automatically test and deploy ETL jobs, transformations, or data validation scripts. It ensures the pipeline runs correctly every time you update it.\n\nExample: Before deploying a Snowflake ETL, the CI/CD pipeline runs checks for missing columns, incorrect data types, and null values.",
    category: "Data Pipelines",
    skill: "CI/CD"
  },
  {
    id: "cicd-5",
    question: "What are popular CI/CD tools?",
    answer: "Common tools include:\n• Jenkins – open-source and customizable\n• GitHub Actions – integrated with GitHub\n• GitLab CI/CD – YAML-based automation\n• Azure DevOps – integrates with Microsoft tools\n• CircleCI / Bitbucket Pipelines – good for cloud workflows\n\nExample: You can use GitHub Actions to deploy Airflow DAGs every time code changes.",
    category: "Tools",
    skill: "CI/CD"
  },
  {
    id: "cicd-6",
    question: "What are the stages in a CI/CD pipeline?",
    answer: "1. Source: Detect changes in the repository.\n2. Build: Prepare environment and install dependencies.\n3. Test: Run automated tests.\n4. Package: Create artifacts (like .whl files or Docker images).\n5. Deploy: Send code to the server or data environment.\n6. Notify: Alert the team if something fails.\n\nExample: After code is pushed to GitHub, the CI pipeline installs dependencies, runs tests, and deploys a new ETL job to Databricks.",
    category: "Pipeline Design",
    skill: "CI/CD"
  },
  {
    id: "cicd-7",
    question: "How do you design a CI/CD pipeline for data ingestion?",
    answer: "• Step 1: Code is pushed to Git.\n• Step 2: Pipeline runs code style and syntax checks.\n• Step 3: Sample data is ingested to test schema.\n• Step 4: After tests pass, the pipeline deploys to Dev/QA/Prod environments.\n\nExample: Ingest data from MySQL to Snowflake automatically using Airflow triggered through CI/CD.",
    category: "Pipeline Design",
    skill: "CI/CD"
  },
  {
    id: "cicd-8",
    question: "What is the difference between ETL and ELT?",
    answer: "• ETL (Extract, Transform, Load): Data is transformed before loading to the warehouse.\n• ELT (Extract, Load, Transform): Data is loaded first, then transformed inside the warehouse (like Snowflake or BigQuery).\n\nExample: ELT is better for big data — it lets powerful databases do the heavy lifting.",
    category: "Data Integration",
    skill: "CI/CD"
  },
  {
    id: "cicd-9",
    question: "How do you test data pipelines?",
    answer: "1. Unit tests: Check individual functions (e.g., a date formatter).\n2. Integration tests: Verify end-to-end flow between systems.\n3. Data quality tests: Check for missing, duplicate, or invalid data.\n\nTools: Pytest, Great Expectations, dbt tests.",
    category: "Testing",
    skill: "CI/CD"
  },
  {
    id: "cicd-10",
    question: "What is a flaky test?",
    answer: "A flaky test sometimes passes and sometimes fails, even if nothing changes.\n\nFix:\n• Use fixed inputs.\n• Avoid using current timestamps.\n• Mock external APIs.\n\nExample: A Spark test failing due to time zone differences — fixed by setting a fixed date.",
    category: "Testing",
    skill: "CI/CD"
  },
  {
    id: "cicd-11",
    question: "What is version control?",
    answer: "It's a system (like Git) that tracks code changes over time. It helps teams collaborate, undo mistakes, and roll back if needed.\n\nExample: Every ETL update is a commit in Git, with clear change history.",
    category: "Version Control",
    skill: "CI/CD"
  },
  {
    id: "cicd-12",
    question: "What branching strategies are used?",
    answer: "• Gitflow: Separate branches for development, release, and hotfix.\n• Trunk-based: Everyone works on short branches merged daily into the main branch.\n\nBeginners Tip: Use Gitflow for large teams and trunk-based for small fast-moving teams.",
    category: "Version Control",
    skill: "CI/CD"
  },
  {
    id: "cicd-13",
    question: "How are schema changes handled?",
    answer: "Use migration tools like Flyway, Liquibase, or dbt. Store SQL migration files in Git and apply automatically via CI/CD.",
    category: "Database Management",
    skill: "CI/CD"
  },
  {
    id: "cicd-14",
    question: "How do you use Docker in CI/CD?",
    answer: "Docker lets you package code with its environment. CI builds a Docker image, tests it, and pushes it to a registry (like Docker Hub or ACR). This ensures the same setup works everywhere.",
    category: "Containerization",
    skill: "CI/CD"
  },
  {
    id: "cicd-15",
    question: "What are container registries?",
    answer: "Places to store Docker images (like GitHub Container Registry, AWS ECR, Azure ACR). CI/CD retrieves images from here to deploy consistent builds.",
    category: "Containerization",
    skill: "CI/CD"
  },
  {
    id: "cicd-16",
    question: "How do you integrate Airflow in CI/CD?",
    answer: "Store Airflow DAGs in Git. Every time a DAG changes, CI validates and tests it before copying to the Airflow server.",
    category: "Orchestration",
    skill: "CI/CD"
  },
  {
    id: "cicd-17",
    question: "How to ensure data quality in CI/CD?",
    answer: "Use tools like Great Expectations or Soda SQL to check if data meets expected rules (schema, nulls, unique IDs). Fail the pipeline if checks fail.",
    category: "Data Quality",
    skill: "CI/CD"
  },
  {
    id: "cicd-18",
    question: "What is Infrastructure as Code (IaC)?",
    answer: "IaC means defining infrastructure (servers, networks, DBs) using code like Terraform. It ensures all environments are identical and reproducible.",
    category: "Infrastructure",
    skill: "CI/CD"
  },
  {
    id: "cicd-19",
    question: "How do you CI/CD Terraform?",
    answer: "Use a pipeline to automatically run terraform plan (preview changes) and terraform apply (deploy resources) with manual approval steps.",
    category: "Infrastructure",
    skill: "CI/CD"
  },
  {
    id: "cicd-20",
    question: "What security best practices exist for CI/CD?",
    answer: "• Never hardcode passwords.\n• Use secret vaults.\n• Restrict access.\n• Scan code and images for vulnerabilities.",
    category: "Security",
    skill: "CI/CD"
  },
  {
    id: "cicd-21",
    question: "How do you manage secrets safely?",
    answer: "Use secure storage (like Azure Key Vault or GitHub Secrets) and load them as environment variables during the build.",
    category: "Security",
    skill: "CI/CD"
  },
  {
    id: "cicd-22",
    question: "How do you monitor CI/CD pipelines?",
    answer: "Use tools like Grafana, Datadog, or built-in dashboards. Set alerts for failed jobs, slow builds, or data issues.",
    category: "Monitoring",
    skill: "CI/CD"
  },
  {
    id: "cicd-23",
    question: "How do you rollback a deployment?",
    answer: "Redeploy the previous working version or restore backup data. Version control makes this quick.",
    category: "Deployment Strategies",
    skill: "CI/CD"
  },
  {
    id: "cicd-24",
    question: "What's Blue-Green deployment?",
    answer: "Keep two environments (Blue = live, Green = new). Switch traffic to Green once it's tested. If something fails, switch back to Blue instantly.",
    category: "Deployment Strategies",
    skill: "CI/CD"
  },
  {
    id: "cicd-25",
    question: "What's a Canary deployment?",
    answer: "Roll out to a small portion of users/data first. If successful, expand gradually.",
    category: "Deployment Strategies",
    skill: "CI/CD"
  },
  {
    id: "cicd-26",
    question: "What's DVC and how is it used?",
    answer: "Data Version Control (DVC) tracks datasets and ML models like Git tracks code. Ensures reproducibility and rollback in data workflows.",
    category: "Version Control",
    skill: "CI/CD"
  },
  {
    id: "cicd-27",
    question: "How do you test pipelines with big data?",
    answer: "Use small samples or synthetic data to mimic real loads. Run large-scale tests in staging.",
    category: "Testing",
    skill: "CI/CD"
  },
  {
    id: "cicd-28",
    question: "How do you improve CI/CD speed?",
    answer: "• Cache dependencies.\n• Run steps in parallel.\n• Skip unnecessary builds.\n• Use smaller Docker images.",
    category: "Performance",
    skill: "CI/CD"
  },
  {
    id: "cicd-29",
    question: "What are pipeline metrics to monitor?",
    answer: "• Build time\n• Success rate\n• Deployment frequency\n• Error rate\n• Mean time to recover (MTTR)",
    category: "Monitoring",
    skill: "CI/CD"
  },
  {
    id: "cicd-30",
    question: "What is artifact management?",
    answer: "Artifacts (e.g., .whl files, Docker images, reports) are stored after build for reusability and rollback.",
    category: "Artifact Management",
    skill: "CI/CD"
  },
  {
    id: "cicd-31",
    question: "What is Continuous Testing?",
    answer: "It means running automated tests continuously in the pipeline to detect issues early.",
    category: "Testing",
    skill: "CI/CD"
  },
  {
    id: "cicd-32",
    question: "How do you automate schema validation?",
    answer: "Use dbt or Great Expectations to compare schemas. Fail deployment if columns or data types don't match.",
    category: "Data Quality",
    skill: "CI/CD"
  },
  {
    id: "cicd-33",
    question: "How to debug failed pipelines?",
    answer: "Check logs, rerun jobs locally, verify paths/secrets, and run in debug mode for detailed output.",
    category: "Debugging",
    skill: "CI/CD"
  },
  {
    id: "cicd-34",
    question: "What's Infrastructure Drift?",
    answer: "When real infrastructure doesn't match IaC code. Fix it by reapplying Terraform or validating drift detection reports.",
    category: "Infrastructure",
    skill: "CI/CD"
  },
  {
    id: "cicd-35",
    question: "How do you manage dependencies?",
    answer: "List all packages with fixed versions in a requirements.txt or poetry.lock file to ensure consistent environments.",
    category: "Dependency Management",
    skill: "CI/CD"
  },
  {
    id: "cicd-36",
    question: "How to monitor data lineage?",
    answer: "Use tools like OpenLineage or dbt docs to track where data comes from and how it changes across steps.",
    category: "Data Governance",
    skill: "CI/CD"
  },
  {
    id: "cicd-37",
    question: "What's rollback testing?",
    answer: "Test if reverting to an older version restores the system correctly without breaking anything.",
    category: "Testing",
    skill: "CI/CD"
  },
  {
    id: "cicd-38",
    question: "What's the purpose of pipeline notifications?",
    answer: "Send alerts when pipelines fail, finish, or exceed expected time — via Slack, Teams, or email.",
    category: "Monitoring",
    skill: "CI/CD"
  },
  {
    id: "cicd-39",
    question: "What's a practical CI/CD example for data projects?",
    answer: "Code commit → test Spark job → build Docker image → deploy to Databricks → validate data → notify on Teams.",
    category: "Best Practices",
    skill: "CI/CD"
  },
  {
    id: "cicd-40",
    question: "How do you ensure reproducibility?",
    answer: "Version control all code, configurations, and datasets. Use Docker for consistent environments.",
    category: "Best Practices",
    skill: "CI/CD"
  },
  {
    id: "cicd-41",
    question: "What's a data contract and why is it useful?",
    answer: "A data contract defines what structure (columns, data types) is expected from a dataset. It prevents schema drift between teams.",
    category: "Data Governance",
    skill: "CI/CD"
  },
  {
    id: "cicd-42",
    question: "How to integrate dbt with CI/CD?",
    answer: "Run dbt test during CI to check for errors and dbt run during CD to deploy models automatically.",
    category: "Data Transformation",
    skill: "CI/CD"
  },
  {
    id: "cicd-43",
    question: "How do you parallelize pipeline builds?",
    answer: "Run multiple test sets or regional data jobs simultaneously to save time.",
    category: "Performance",
    skill: "CI/CD"
  },
  {
    id: "cicd-44",
    question: "What's the difference between Jenkins and GitHub Actions?",
    answer: "Jenkins is flexible but requires maintenance. GitHub Actions is cloud-based, easier to set up, and integrates directly with GitHub repos.",
    category: "Tools",
    skill: "CI/CD"
  },
  {
    id: "cicd-45",
    question: "Final Tip for Beginners:",
    answer: "Focus on understanding why CI/CD exists — it's all about automation, consistency, and confidence in every code or data change you make.",
    category: "Best Practices",
    skill: "CI/CD"
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
