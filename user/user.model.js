module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(`users`, {
		id: {
			type: DataTypes.INTEGER, 
			primaryKey: true, 
			autoIncrement: true,
			allowNull: false
		},
		firstName: {
			allowNull: false,
			type: DataTypes.STRING, 
		},
		lastName: {
			allowNull: true,
			type: DataTypes.STRING, 
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING, 
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING, 
		},
		gender: {
			allowNull: true,
			type: DataTypes.STRING, 
		},
		image: {
			allowNull: true,
			type: DataTypes.STRING, 
		},
		createdDate: {
			allowNull: false,
			type: DataTypes.DATE, 
		},
	})
	return User;
}