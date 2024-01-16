import classes from "./Chatbox.module.css";

const Chatbox = props => {
  return (
    <div className={classes.overlay} onClick={props.closeChat}>
      <div className={classes.modal}>
        <div className={classes.chatContainer}>
          <div className={classes.chatHeader}>
            <h2>Chat</h2>
          </div>
          <div className={classes.chatMessages}>
            <div className={classes.messageRecipient}>
              <p className={classes.senderName}>Recipient:</p>
              <p>
                Thank you so much for donating to my crowdfunding; it really
                helped me out.
              </p>
            </div>
            <div className={classes.messageDonor}>
              <p className={classes.senderName}>Donor:</p>
              <p>No problem, how have you been doing?</p>
            </div>
          </div>
          <div className={classes.chatInput}>
            <input
              type="text"
              className={classes.inputField}
              placeholder="Type a message..."
            />
            <button className={classes.sendButton}>
              {/* Send icon (you can replace this with your desired icon) */}
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
