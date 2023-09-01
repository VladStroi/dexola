import styles from "./web-tablet.module.css";
import { fetchNFTsData } from "./../nfts-mock/nfts-mock";

export const WebTable = () => {
  return (
      <table className={styles.webTablet}>
        <thead>
          <tr className={styles.row}>
            <th></th>
            <th>NFT Name</th>
            <th>Rarity Level</th>
            <th>Total games</th>
            <th>Games Won</th>
            <th>Price (ETH)</th>
          </tr>
        </thead>
        <tbody>
            {fetchNFTsData.map((row) => (
          <tr key={row.id} className={styles.row}>
            <td className={styles.image}>
              <img src={row.avatar} alt="Avatar" />
            </td>
            <td>{row.name}</td>
            <td>{row.level}</td>
            <td>{row.games}</td>
            <td>{row.won}</td>
            <td>{row.price}</td>
          </tr>
            ))}
        </tbody>
      </table>
  );
};
