import styles from "./mobile.module.css";
import { fetchNFTsData } from "./../nfts-mock/nfts-mock";

export const MobileTable = () => {
  return (
    <>
      {fetchNFTsData.map((row, index) => (
        <table key={index} className={styles.mobile}>
          <thead>
            <tr>
              <th colSpan={2}>
                {index + 1}. {row.name}
              </th>
              <th>{row.price}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.image}>
                <img src={row.avatar} alt="Avatar" />
              </td>
              <td className={styles.indexes}>
                <p>Rarity:</p>
                <p>Total games:</p>
                <p>Games Won:</p>
              </td>
              <td className={styles.statistics}>
                <p>{row.level}</p>
                <p>{row.games}</p>
                <p>{row.won}</p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
