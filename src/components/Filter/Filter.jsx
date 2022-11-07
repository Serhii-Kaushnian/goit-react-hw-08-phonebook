import { Form, Label, Input, ClearButton } from './Filter.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, clearFilter } from 'redux/filter/filterSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };
  const handleFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <div>
      <Form>
        <Label>
          Find contact by name
          <Input
            type="text"
            name="filter"
            value={filter.filter ? filter.filter : ''}
            onChange={handleFilter}
          />
        </Label>
        <ClearButton onClick={handleClearFilter} type="button">
          <FaTrashAlt />
        </ClearButton>
      </Form>
    </div>
  );
}
