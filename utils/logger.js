const winston = require('winston');

// إعدادات logger
const logger = winston.createLogger({
    level: 'info', // يمكن أن يكون 'info', 'warn', 'error'
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        // كتابة اللوج إلى ملف
        new winston.transports.File({ filename: 'logs/combined.log' }),
        new winston.transports.File({ filename: 'logs/errors.log', level: 'error' }),
    ],
});

// في حالة وجود بيئة تطوير، يمكننا كتابة اللوج إلى الكونسل
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;
