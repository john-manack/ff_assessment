-- 1.) Write a SQL query to pull all customers.
SELECT * FROM Customers;

-- 2.) Write a SQL query to pull all customers that have orders (no duplicates).
SELECT DISTINCT c.id, c.name FROM Customers c
    INNER JOIN Orders o ON c.id = o.customer_id;

-- 3.) Write a SQL query to pull all customers that do not have orders.
SELECT c.id, c.name FROM Customers c
    LEFT JOIN Orders o ON c.id = o.customer_id
WHERE o.customer_id IS NULL;

-- 4.) If you had to create an index on these tables, which fields would you most likely index, and why?
-- Answer: Indexes are used to speed up frequently-used conditional searches within large databases. Since these two 
-- tables will often be joined to determine which customers have outstanding orders, and I would write a clustered
-- index on the "id" column in the "Customers" table, and the "customer_id" column in the "Orders" table to speed 
-- up conditional join queries.

-- 5.) Write a query that lists each customer name, email, and the number of orders they have.
SELECT c.name, c.email, COUNT(o.customer_id) AS number_of_orders
FROM Customers c
    INNER JOIN Orders o ON c.id = o.customer_id
GROUP BY c.id;

-- 6.) Write a query that pulls all customers that have between 2 and 5 orders.
SELECT c.id, c.name, c.address, c.phone_number, c.email, COUNT(o.customer_id) AS number_of_orders
FROM Customers c
    INNER JOIN Orders o ON c.id = o.customer_id
GROUP BY c.id
HAVING COUNT(o.customer_id) <= 5 
    AND COUNT(o.customer_id) >= 2;