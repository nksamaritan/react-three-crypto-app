import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { server } from "../index";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import Error from "./Error";

const Coins = () => {
  const [Coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&locale=en`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) {
    return <Error message={"API is down!!!"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} padding={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹</Radio>
              <Radio value={"eur"}>€</Radio>
              <Radio value={"usd"}>$</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {Coins.map((i) => {
              return (
                <CoinCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  img={i.image}
                  symbol={i.symbol}
                  price={i.current_price}
                  currencySymbol={currencySymbol}
                />
              );
            })}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                onClick={() => changePage(index + 1)}
                bgColor={"blackAlpha.900"}
                color={"white"}
                key={index}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
export default Coins;
