function Tables(props) {
  return props.sdkBlocks.map((dat) => (
    <tr>
      {dat.map((dat2) => {
        return (
          <td
            style={{ color: dat2.isBlank === false ? "green" : "black" }}
            className={`${
              props.currentIdx[0] === dat2.idx[0] &&
              props.currentIdx[1] === dat2.idx[1]
                ? "clicked "
                : "non_clicked "
            }${
              (dat2.idx[0] + 1) % 3 == 0 && dat2.idx[0] + 1 !== 9
                ? "boldLineBottom "
                : ""
            }
            ${
              (dat2.idx[1] + 1) % 3 == 0 && dat2.idx[1] + 1 !== 9
                ? "boldLineTop "
                : ""
            }
              `}
            onClick={() => props.select(dat2.idx)}
          >
            {dat2.value === 0 ? "" : dat2.value}
          </td>
        );
      })}{" "}
    </tr>
  ));
}

export default Tables;
