const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "opacity 200ms ease-in-out",
    zIndex: "40",
  },
  content: {
    width: "auto",
    height: "auto",
    //   maxWidth: "90%", // 画面幅の90%に制限 (必要に応じて調整)
    //   maxHeight: "90%", // 画面高さの90%に制限 (必要に応じて調整)
    margin: 0,
    padding: 0,
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
    transition: "opacity 200ms ease-in-out",
    //   opacity: 0,
    //   top: "90px", // 上からの位置
    right: "10%", // 右からの位置
    left: "10%",
    //   bottom: "auto",
    //   zIndex: "40",
    transform: "none", // デフォルトのtransformをクリア
    border: "none", // ボーダーをなしに設定
  },
};

export default customStyles;
