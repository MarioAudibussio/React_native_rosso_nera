import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './analytics.styles';
import { Ionicons } from '@expo/vector-icons';

interface PerformanceData {
  month: string;
  sales: number;
  target: number;
}

const AnalyticsScreen = () => {
  const performanceData: PerformanceData[] = [
    { month: 'Jan', sales: 12000, target: 10000 },
    { month: 'Feb', sales: 15000, target: 12000 },
    { month: 'Mar', sales: 11000, target: 13000 },
    { month: 'Apr', sales: 16000, target: 13000 },
    { month: 'May', sales: 14000, target: 14000 },
  ];

  const calculatePerformance = (sales: number, target: number) => {
    const percentage = (sales / target) * 100;
    return {
      percentage,
      isPositive: percentage >= 100,
    };
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Performance Analytics</Text>
        <Text style={styles.headerSubtitle}>Monthly Sales Overview</Text>
      </View>

      {performanceData.map((data, index) => {
        const performance = calculatePerformance(data.sales, data.target);
        return (
          <View key={index} style={styles.performanceCard}>
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{data.month}</Text>
              <Ionicons
                name={performance.isPositive ? 'trending-up' : 'trending-down'}
                size={24}
                color={performance.isPositive ? '#4CAF50' : '#F44336'}
              />
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Sales</Text>
                <Text style={styles.statValue}>${data.sales.toLocaleString()}</Text>
              </View>
              
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Target</Text>
                <Text style={styles.statValue}>${data.target.toLocaleString()}</Text>
              </View>
              
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Performance</Text>
                <Text 
                  style={[
                    styles.statValue,
                    { color: performance.isPositive ? '#4CAF50' : '#F44336' }
                  ]}
                >
                  {performance.percentage.toFixed(1)}%
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default AnalyticsScreen;