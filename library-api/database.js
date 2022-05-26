const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:root@localhost:5500/library')

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Director = sequelize.define('Director', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Genre = sequelize.define('Genre', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Book = sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rate: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Director.hasMany(Book)
Book.belongsTo(Director)

const BookGenre = sequelize.define('BookGenre', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    BookId: {
      type: Sequelize.INTEGER,
      references: {
        model: Book,
        key: 'id'
      }
    },
    GenreId: {
      type: Sequelize.INTEGER,
      references: {
        model: Genre,
        key: 'id'
      }
    }
})

Book.belongsToMany(Genre, { through: BookGenre })
Genre.belongsToMany(Book, { through: BookGenre })

const UserBook = sequelize.define('UserBook', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    BookId: {
      type: Sequelize.INTEGER,
      references: {
        model: Book,
        key: 'id'
      }
    },
    UserId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
})

Book.belongsToMany(User, { through: UserBook })
User.belongsToMany(Book, { through: UserBook })

module.exports = {
    sequelize: sequelize,
    Director: Director,
    User: User,
    Genre: Genre,
    Book: Book,
    UserBook: UserBook,
    BookGenre: BookGenre
}
