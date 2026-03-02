import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SelectCompare } from './pages/SelectCompare';
import { DialogCompare } from './pages/DialogCompare';
import { PopoverCompare } from './pages/PopoverCompare';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SelectCompare />} />
          <Route path="select" element={<SelectCompare />} />
          <Route path="dialog" element={<DialogCompare />} />
          <Route path="popover" element={<PopoverCompare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
