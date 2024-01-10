import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'


const Table = () => {
  
  return (
    <Box mb="20px"
    ><table>
    <thead>
      <tr>
        <th>Month</th>
        <th>Supplier</th>
        <th>Revenue(IN CO2E)</th>
        <th>YOY Revenue R/E</th>
      </tr>
    </thead>
    <tbody>
      
        <tr >
          
          <td>Jan</td>
          <td>1790</td>
          <td>137.3</td>
          <td className='red'>15%↑</td>
        </tr>
        <tr >
          <td>Feb</td>
          <td>2205</td>
          <td>99.8</td>
          <td className='green'>3%↓</td>
        </tr>
        <tr >
          <td>Mar</td>
          <td>2345</td>
          <td>122.6</td>
          <td className='green'>12%↓</td>
        </tr>
        <tr >
          <td>Apr</td>
          <td>1503</td>
          <td>130.2</td>
          <td className='green'>16%↓</td>
        </tr>
        <tr >
          <td>May</td>
          <td>4634</td>
          <td>124.2</td>
          <td className='red'>-8%↑</td>
        </tr>
        <tr >
          <td>Jun</td>
          <td>4634</td>
          <td>124.2</td>
          <td className='red'>-13%↑</td>
        </tr>
        <tr >
          <td>Jul</td>
          <td>3487</td>
          <td>165.2</td>
          <td className='green'>26%↓</td>
        </tr>
    </tbody>
  </table></Box>
  )
}

export default Table