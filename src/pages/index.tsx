import { styled } from "../styles/stitches.config";

const Button = styled("button", {
  backgroundColor: "$green500",
  padding: 10,
  borderRadius: 8,
  borderWidth: 0,

  cursor: "pointer",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <Button>
      Enviar <span>{":)"}</span>
    </Button>
  );
}
