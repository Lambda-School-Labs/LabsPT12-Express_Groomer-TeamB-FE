import { Tabs, Radio } from 'antd';
import React from 'react';
import Overview from "./overview"
import CustomerProfilePage from "../CustomerProfile/CustProContainer"

const { TabPane } = Tabs;

class CustTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="0" tabPosition={mode} style={{ height: "100%", marginLeft: "5%"}}>
            <TabPane style={{ fontSize: "16px"}} tab={<span><i class="fas fa-paw"></i> Overview</span>} key="0">
              <Overview/>
            </TabPane>
            <TabPane tab={<span><i class="fas fa-paw"></i> My Info</span>} key="1">
              <CustomerProfilePage/> 
            </TabPane><TabPane tab={<span><i class="fas fa-paw"></i> My Pets</span>} key="2">
              My Pets
            </TabPane>
            <TabPane tab={<span><i class="fas fa-paw"></i> Appointments</span>} key="3">
              Appointments
            </TabPane>
            <TabPane tab={<span><i class="fas fa-paw"></i> Search Groomers</span>} key="4">
              Search Groomers
            </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default CustTab