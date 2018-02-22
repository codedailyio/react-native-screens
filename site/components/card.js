import React from "react";
import Link from "next/link";

import { Row, Col } from "emotion-layout";
import styled, { css } from "react-emotion";

const Card = styled(Col)({
  minHeight: "400px",
  maxHeight: "450px",
});

const InnerCard = styled(Row)({
  backgroundColor: "#FFF",
  boxShadow: "0 1px 2px 1px rgba(65, 106, 166, 0.2)",
  transition: "all .5s ease",
  overflow: "hidden",
});

const CardTopDisplay = styled(Col)({
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",
  transition: "all .3s ease",
  ":hover": {
    backgroundSize: "33%",
  },
});

const LowerTitle = styled.div({
  borderTop: "1px solid #f5f5f5",
  height: "80px",
  textAlign: "center",
  padding: "8px",
});

const Title = styled.h2({
  margin: 0,
  color: "#444",
  fontSize: "18px",
  fontWeight: "700",
  marginBottom: "8px",
  ":hover": {
    textDecoration: "underline",
  },
});

const Paragraph = styled.p({
  margin: 0,
  color: "#444",
  fontSize: "12px",
  fontWeight: "300",
  lineHeight: 1.25,
});

const coverClassname = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

// Add tweet options, and other social options

const DisplayCard = ({ title, id, slug, image, description, sponsored }) => {
  return (
    <Card width={[1, 1 / 2, 1 / 3]} maxWidth={[1, 1 / 2, "450px"]} p={2}>
      <InnerCard flexDirection="column">
        <CardTopDisplay css={{ backgroundImage: `url(${image})` }} m={2}>
          <Link href={`/screen/${id}/${slug}`}>
            <a className={coverClassname} />
          </Link>
        </CardTopDisplay>
        <LowerTitle>
          <Title>
            <Link href={`/screens/${id}/${slug}`}>
              <a css={{ color: "inherit", textDecoration: "none" }}>{title}</a>
            </Link>
          </Title>
          <Paragraph>{description}</Paragraph>
        </LowerTitle>
      </InnerCard>
    </Card>
  );
};

export default DisplayCard;
