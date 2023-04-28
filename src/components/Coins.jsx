import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, HStack } from "@chakra-ui/react";
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
  }, []);

  if (error) {
    return <Error message={"API is down!!!"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};
export default Coins;
