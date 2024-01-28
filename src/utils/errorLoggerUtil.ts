const errorLogger = (errors:Array<Error>) => {
    for (const { message } of errors) {
        console.error(message);
      }
}

export default errorLogger;