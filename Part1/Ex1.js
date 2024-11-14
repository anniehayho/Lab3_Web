class DatabaseService {
    connect() {
        console.log('Connecting to Database abc');
    }

    getUserData(userId) {
        console.log('Fetched data for user ID ${userId} from Database');
        return { id: userId, name: 'Alice' };
    }

    closeConnect() {
        console.log('Closing Database connection');
    }

    rollback() {
        console.log('Rolled back');
    }
}

class MySQLDatabaseService extends DatabaseService {
    connect() {
        console.log('Connecting to MySQL');
    }
    getUserData(userId) {
        console.log('Fetched data for user ID ${userId} from MySQL Database');
        return { id: userId, name: 'Alice (MySQL' };
    }
}

class SQLServerDatabaseService extends DatabaseService{
    connect() {
        console.log('Connecting to SQL Server Database');
    }

    getUserData(userId) {
        console.log('Fetched data for user ID ${userId} from SQL Server Database');
        return { id: userId, name: 'Bob (SQL Server)' };
    }

    closeConnect() {
        console.log('Closing SQL Server Database connection');
    }
}

class PostgreSQLDatabaseService extends DatabaseService{
    connect() {
        console.log('Connecting to PostgreSQL Database');
    }

    getUserData(userId) {
        console.log('Fetched data for user ID ${userId} from PostgreSQL Database');
        return { id: userId, name: 'Charlie (PostgreSQL)' };
    }

    rollback() {
        console.log('Rolled back PostgreSQL transaction');
    }
}

class UserManager {
    constructor(databaseServer) {
        this.databaseServer = databaseServer;
    }

    connectToDatabase() {
        return this.databaseServer.connect();
    }

    fetchUserData(userId) {
        return this.databaseServer.getUserData(userId);
    }
    
    disConnectToDatabase() {
        return this.databaseServer.closeConnect();
    }

    rollbackTransaction() {
        return this.databaseServer.rollback();
    }
}

const userMySQL = new MySQLDatabaseService();
const userServiceMySQL = new UserManager(userMySQL);

console.log(userServiceMySQL.connectToDatabase());
console.log(userServiceMySQL.fetchUserData(1));
console.log(userServiceMySQL.disConnectToDatabase());
console.log(userServiceMySQL.rollbackTransaction());

const userSQLServer = new SQLServerDatabaseService();
const userServiceSQLServer = new UserManager(userSQLServer);

console.log(userServiceSQLServer.connectToDatabase());
console.log(userServiceSQLServer.fetchUserData(2));
console.log(userServiceSQLServer.disConnectToDatabase());
console.log(userServiceSQLServer.rollbackTransaction());

const userPostgreSQL = new PostgreSQLDatabaseService();
const userServicePostgreSQL = new UserManager(userPostgreSQL);

console.log(userServicePostgreSQL.connectToDatabase());
console.log(userServicePostgreSQL.fetchUserData(3));
console.log(userServicePostgreSQL.disConnectToDatabase());
console.log(userServicePostgreSQL.rollbackTransaction());
