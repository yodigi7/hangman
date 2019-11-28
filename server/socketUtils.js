
class socketUtils {
    constructor() {}
    static onConnection(socket) {
        console.log('connected');
        socket.on('disconnect', socketUtils.onDisconnect);
        socket.on('chat message', socketUtils.onChatMessage);
    }

    static onDisconnect() {
        console.log('disconnected');
    }

    static onChatMessage(message) {
        console.log(message);
    }
}

module.exports = socketUtils;