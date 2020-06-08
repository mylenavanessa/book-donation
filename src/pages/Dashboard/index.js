import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import { Table, Row, Col, Card, Tabs, Spin } from "antd";
import { StarFilled } from '@ant-design/icons';
import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import _ from 'lodash';

import './styles.css';
import vector from '../../assets/vector.png'
import book from '../../assets/book.png'

const { TabPane } = Tabs;

const STATUS_TYPE = {
  processing: "Em Análise",
  completed: "Concluída",
};

function Dashboard() {
  const [donations, setDonations] = useState(null);
  const [donationsGeral, setDonationsGeral] = useState(null);
  const [booksRecent, setBooksRecent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingDonationsGeral, setLoadingDonationsGeral] = useState(false);
  const [loadingBooksRecent, setLoadingBooksRecent] = useState(false);

  
  useEffect(() => {
    fetchDonationsList();
    fetchDonationsGeral();
    fetchBooksRecent();
  }, []);

  async function fetchDonationsList() {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const { status, data } = await api.get(
        `/users/${userId}/books/donations`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (status === 200) {
        setDonations(data);
        setLoading(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(`Error ao buscar os dados. ${err}`);
    }
  }

  async function fetchDonationsGeral() {
    try {
      setLoadingDonationsGeral(true);
      const token = localStorage.getItem("token");

      const { status, data } = await api.get(
        `/users/books/donations`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (status === 200) {
        setDonationsGeral(data);
        setLoadingDonationsGeral(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(`Error ao buscar os dados. ${err}`);
    }
  }

  async function fetchBooksRecent() {
    try {
      setLoadingBooksRecent(true);
      const token = localStorage.getItem("token");

      const { status, data } = await api.get(
        `/users/donor/new_books`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (status === 200) {
        setBooksRecent(data);
        setLoadingBooksRecent(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(`Error ao buscar os dados. ${err}`);
    }
  }

  const columns = [
    {
      title: "Livro",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Autor",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Crédito",
      dataIndex: "credit",
      key: "credit",
      align: "center",
    },
    {
      title: "Doador",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Nota",
      dataIndex: "points",
      key: "points",
      align: "center",
      render: (note) => note ? (
        <span>
          <StarFilled style={{ color: '#f1c40e' }}/> {note.toFixed(2)}
        </span>
      ) : ''
    },
    {
      title: "Data/hora",
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
      render: (data) => moment(data).format('DD/MM/YYYY à[s] HH:MM')
    },
  ];

  const columnsDonations = [
    {
      title: "Livro",
      dataIndex: "book_title",
      key: "book_title",
    },
    {
      title: "Crédito",
      dataIndex: "credit",
      key: "credit",
      align: "center",
    },
    {
      title: "Nome do Recebedor",
      dataIndex: "name_receiver",
      key: "name_receiver",
      align: "center",
    },
    {
      title: "Nota do Recebedor",
      dataIndex: "receiver_note",
      key: "receiver_note",
      align: "center",
      render: (note) => note && (
        <span>
          <StarFilled style={{ color: '#f1c40e' }}/> {note.toFixed(2)}
        </span>
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => STATUS_TYPE[status],
    },
    {
      title: "Data da confirmação",
      dataIndex: "updated_at",
      key: "updated_at",
      align: "center",
      render: (data, record) => record.status === 'completed' ? moment(data).format('DD/MM/YYYY') : ''
    },
  ];

  const columnsReceipts = [
    {
      title: "Livro",
      dataIndex: "book_title",
      key: "book_title",
    },
    {
      title: "Crédito",
      dataIndex: "credit",
      key: "credit",
      align: "center",
    },
    {
      title: "Nome do doador",
      dataIndex: "name_donor",
      key: "name_donor",
      align: "center",
    },
    {
      title: "Nota do doador",
      dataIndex: "donor_note",
      key: "donor_note",
      align: "center",
      render: (note) => note && (
        <span>
          <StarFilled style={{ color: '#f1c40e' }}/> {note.toFixed(2)}
        </span>
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => STATUS_TYPE[status],
    },
    {
      title: "Data da confirmação",
      dataIndex: "updated_at",
      key: "updated_at",
      align: "center",
      render: (data, record) => record.status === 'completed' ? moment(data).format('DD/MM/YYYY') : ''
    },
  ];

  return (
    <>
      <header>
        <img src={vector} alt='cabeça' style={{width: '100%', height: 450}}/>
        
        <div className='headerTitles'>
          <div className={"logo"}>
            <img src={book} alt={'logo'} width={60} height={60}/> 
            <span>Books Donations</span>
          </div>
          <div className="headerLinks">
            <Link to='/' className='headerLink'>Home</Link>
            <Link to='/dashboard' className='headerLink'>Dashboard</Link>
            <Link to='/profile' className='headerLink'>Sobre</Link>
          </div>
        </div>
        <h1 className='headerTitle'>Doe um livro e incentive a leitura</h1>
      </header>
      <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: -50 }}>
        {/* <Row justify={'end'} style={{ marginBottom: 30 }}>
          <Col span={8}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <span>Lucas Ferreira</span>
              <span>4.7</span>
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col span={24}>
            <Card title="Livros recentemente cadastrados">
              <Spin spinning={loadingBooksRecent} delay={200}>
                <Table
                  columns={columns}
                  dataSource={booksRecent && booksRecent}
                  pagination={false}
                />
              </Spin>
            </Card>
          </Col>
        </Row>
        <Row gutter={[4,4]} justify={'center'}>
          <Col span={12}>
            <Card title="Total de Doações">
              <Spin spinning={loading} delay={200}>
                <Row>
                  <Col span={12}>
                    {!_.isEmpty(donations) && (
                      <Pie
                        data={donations.pie_chart_donations}
                        options={{ 
                          title: { display: true, text: 'Minhas doações' },
                          legend: { position: 'bottom', labels: { fontSize: 9 } }
                        }}
                        width={60}
                        height={50}
                      />
                    )}
                    
                  </Col>
                  <Col span={12}>
                    {!_.isEmpty(donations) && (
                      <Pie
                        data={donations.pie_chart_receipts}
                        options={{ 
                          title: { display: true, text: 'Meus recebimentos'},
                          legend: { position: 'bottom', labels: { fontSize: 9 } }
                        }}
                        width={60}
                        height={50}
                      />  
                    )}
                  </Col>
                </Row>
              </Spin>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Total de doações gerais">
              <Spin spinning={loadingDonationsGeral} delay={200}>
                <Row>
                  <Col span={24}>
                    {!_.isEmpty(donationsGeral) && (
                      <Pie
                        data={donationsGeral.pie_chart_donations}
                        options={{ 
                          legend: { position: 'bottom', labels: { fontSize: 9 } }
                        }}
                        width={120}
                        height={50}
                      />
                    )}
                  </Col>
                </Row>
              </Spin>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Spin spinning={loading} delay={200}>
              <Card>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Doações" key="1">
                    <Table
                      columns={columnsDonations}
                      dataSource={donations && donations.user_donations}
                      pagination={false}
                    />
                  </TabPane>
                  <TabPane tab="Recebimentos" key="2">
                    <Table
                      columns={columnsReceipts}
                      dataSource={donations && donations.user_receipts}
                      rowKey={(record, index) => record}
                      pagination={false}
                    />
                  </TabPane>
                </Tabs>
              </Card>
            </Spin>
          </Col>
        </Row>
      </div>
      <div className='footer'>
          <p>Projeto de software II</p>
          <p>Faculdade Nova Roma</p>
      </div>
    </>
  );
}

export default Dashboard;
