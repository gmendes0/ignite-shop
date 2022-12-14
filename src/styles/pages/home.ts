import { styled } from "../stitches.config";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  marginLeft: "auto",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  minHeight: 656,
});

export const Product = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  paddin: "0.25rem",
  cursor: "pointer", // @todo pode remover depois de setar o href
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "2rem",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.3s ease-in-out",
  },

  "footer strong": {
    fontSize: "$lg",
  },

  "footer span": {
    fontSize: "$xl",
    fontWeight: "bold",
    color: "$green300",
  },

  "&:hover footer": {
    transform: "translateY(0%)",
    opacity: 1,
  },
});
