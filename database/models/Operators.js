module.exports = function(sequelize, dataTypes) {
    
    let alias = "Operator";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: true
        },
        surname:{
            type: dataTypes.STRING,
            allowNull: true
        },
        userName:{
            type: dataTypes.STRING,
            allowNull: true
        },
        password:{
            type: dataTypes.STRING,
            allowNull: true
        },
        status:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        creationDate:{
            type: dataTypes.DATE,
            allowNull: true
        },
        lastLoginDate:{
            type: dataTypes.DATE,
            allowNull: true
        }
    }

    let config = {
        tablename: "operators",
        timestamps: false
    }
    
    let Operator = sequelize.define(alias, cols, config);

    return Operator
}