import useStyles from './styles';
import CommonAppStore from '../../Stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import Button from '../Button';
import CommonApiService from '../../ApiServices/CommonApiService';
const Table = (props) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    CommonAppStore.getUsers();
  }, []);

  function handleClick() {
    CommonApiService.updateUser(date);
  }

  function DateFormat(date) {
    var format_date = new Date(date);
    var dd = String(format_date.getDate()).padStart(2, '0');
    var mm = String(format_date.getMonth() + 1).padStart(2, '0');
    var yyyy = format_date.getFullYear();

    var fullDate = yyyy + '-' + mm + '-' + dd;
    return fullDate;
  }
  const c = useStyles();

  function handleDateChange(i, j, event) {
    var date = CommonAppStore.users;
    if (j === 0) {
      date[i].dateRegistration = event.target.value;
    } else {
      date[i].dateLastActivity = event.target.value;
    }
    setDate(date);
  }

  return (
    <div>
      <Button name="Save" action={handleClick} />
      <table className={c.table}>
        <thead className={c.thead}>
          <tr className={c.tr}>
            <th className={c.th}>User Id</th>
            <th className={c.th}>Data Registration</th>
            <th className={c.th}>Last day activity</th>
          </tr>
        </thead>
        <tbody>
          {CommonAppStore.users &&
            CommonAppStore.users.map((item) => (
              <tr className={c.tr} key={item.id}>
                <td>{item.id}</td>
                <td>
                  <input
                    className={c.inputDate}
                    type="date"
                    defaultValue={DateFormat(item.dateRegistration)}
                    onChange={(e) => handleDateChange(item.id - 1, 0, e)}
                    key={item.id}></input>
                </td>
                <td>
                  <input
                    className={c.inputDate}
                    type="date"
                    defaultValue={DateFormat(item.dateLastActivity)}
                    onChange={(e) => handleDateChange(item.id - 1, 1, e)}
                    key={item.id}></input>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Table);
