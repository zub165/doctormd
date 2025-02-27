class EmergencyFinderTestSuite {
    constructor() {
        this.testData = {
            patients: [],
            waitTimes: [],
            hospitals: []
        };
    }

    // Registration Form Tests
    async testRegistrationForm() {
        console.log("\nTesting Registration Form...");
        
        const testCases = [
            {
                name: "Valid Registration",
                data: {
                    firstName: "John",
                    lastName: "Doe",
                    dob: "1990-01-01",
                    symptoms: "Fever",
                    location: "Central Hospital",
                    severity: 8
                },
                shouldPass: true
            },
            {
                name: "Emergency Case",
                data: {
                    firstName: "Jane",
                    lastName: "Smith",
                    dob: "1985-05-15",
                    symptoms: "Chest Pain",
                    location: "Heart Center",
                    severity: 18
                },
                shouldPass: true
            },
            {
                name: "Invalid Registration - Missing Fields",
                data: {
                    firstName: "John",
                    symptoms: "Headache"
                },
                shouldPass: false
            }
        ];

        for (const test of testCases) {
            try {
                const result = await this.registerPatient(test.data);
                const passed = result === test.shouldPass;
                console.log(`${test.name}: ${passed ? "✅" : "❌"}`);
            } catch (error) {
                const passed = !test.shouldPass;
                console.error(`${test.name} failed:`, error);
            }
        }
    }

    // Wait Time Tests
    async testWaitTimeCalculations() {
        console.log("\nTesting Wait Time Calculations...");
        
        const testCases = [
            {
                name: "Normal Load",
                data: {
                    currentPatients: 10,
                    severity: 5,
                    staffCount: 4,
                    averageTimePerPatient: 20
                },
                expectedRange: { min: 40, max: 50 }
            },
            {
                name: "High Load",
                data: {
                    currentPatients: 25,
                    severity: 15,
                    staffCount: 6,
                    averageTimePerPatient: 20
                },
                expectedRange: { min: 60, max: 75 }
            },
            {
                name: "Low Load",
                data: {
                    currentPatients: 3,
                    severity: 2,
                    staffCount: 5,
                    averageTimePerPatient: 20
                },
                expectedRange: { min: 15, max: 25 }
            },
            {
                name: "Critical Emergency",
                data: {
                    currentPatients: 15,
                    severity: 19,
                    staffCount: 4,
                    averageTimePerPatient: 20
                },
                expectedRange: { min: 0, max: 10 }
            }
        ];

        for (const test of testCases) {
            try {
                const waitTime = await this.calculateWaitTime(test.data);
                const passed = waitTime >= test.expectedRange.min && waitTime <= test.expectedRange.max;
                console.log(`${test.name}: ${passed ? "✅" : "❌"} (${waitTime} minutes)`);
            } catch (error) {
                console.error(`${test.name} failed:`, error);
            }
        }
    }

    // Severity Scale Tests
    async testSeverityScale() {
        console.log("\nTesting Severity Scale...");
        
        const testCases = [
            {
                name: "Critical Symptoms",
                symptoms: ["chest pain", "shortness of breath"],
                expectedRange: { min: 15, max: 20 }
            },
            {
                name: "Moderate Symptoms",
                symptoms: ["fever", "cough"],
                expectedRange: { min: 5, max: 10 }
            },
            {
                name: "Mild Symptoms",
                symptoms: ["sore throat", "runny nose"],
                expectedRange: { min: 1, max: 5 }
            }
        ];

        for (const test of testCases) {
            try {
                const severity = await this.calculateSeverity(test.symptoms);
                const passed = severity >= test.expectedRange.min && 
                             severity <= test.expectedRange.max;
                console.log(`${test.name}: ${passed ? "✅" : "❌"} (${severity}/20)`);
            } catch (error) {
                console.error(`${test.name} failed:`, error);
            }
        }
    }

    // Map Functionality Tests
    async testMapFunctionality() {
        console.log("\nTesting Map Integration...");
        
        const testCases = [
            {
                name: "Distance Calculation - Short",
                data: {
                    userLocation: { lat: 40.7128, lng: -74.0060 },
                    hospitalLocation: { lat: 40.7589, lng: -73.9851 }
                },
                expectedDistance: 3.5
            },
            {
                name: "Distance Calculation - Long",
                data: {
                    userLocation: { lat: 40.7128, lng: -74.0060 },
                    hospitalLocation: { lat: 41.8781, lng: -87.6298 }
                },
                expectedDistance: 740
            }
        ];

        for (const test of testCases) {
            try {
                const distance = this.calculateDistance(
                    test.data.userLocation,
                    test.data.hospitalLocation
                );
                const passed = Math.abs(distance - test.expectedDistance) <= test.expectedDistance * 0.1; // 10% margin
                console.log(`${test.name}: ${passed ? "✅" : "❌"} (${distance.toFixed(1)} miles)`);
            } catch (error) {
                console.error(`${test.name} failed:`, error);
            }
        }
    }

    // Resource Optimization Tests
    async testResourceOptimization() {
        console.log("\nTesting Resource Optimization...");
        
        const testCases = [
            {
                name: "Staff Scheduling",
                data: {
                    currentStaff: 4,
                    expectedPatients: 20,
                    timeSlot: "morning",
                    dayOfWeek: "monday"
                },
                expectedRange: { min: 5, max: 7 }  // Recommended staff count
            },
            {
                name: "Room Allocation",
                data: {
                    availableRooms: 10,
                    criticalPatients: 3,
                    regularPatients: 5,
                    observationPatients: 2
                },
                expectedUtilization: 0.8  // 80% utilization target
            },
            {
                name: "Supply Prediction",
                data: {
                    currentSupplies: {
                        masks: 1000,
                        gloves: 2000,
                        medications: 500
                    },
                    dailyUsage: {
                        masks: 100,
                        gloves: 300,
                        medications: 50
                    },
                    reorderTime: 3  // days
                },
                expectedReorder: ["gloves"]  // Items needing reorder
            }
        ];

        for (const test of testCases) {
            try {
                switch(test.name) {
                    case "Staff Scheduling":
                        const staffNeeded = this.calculateOptimalStaffing(test.data);
                        const staffPassed = staffNeeded >= test.expectedRange.min && 
                                         staffNeeded <= test.expectedRange.max;
                        console.log(`${test.name}: ${staffPassed ? "✅" : "❌"} (${staffNeeded} staff needed)`);
                        break;

                    case "Room Allocation":
                        const utilization = this.calculateRoomUtilization(test.data);
                        const utilizationPassed = Math.abs(utilization - test.expectedUtilization) <= 0.1;
                        console.log(`${test.name}: ${utilizationPassed ? "✅" : "❌"} (${(utilization * 100).toFixed(1)}% utilization)`);
                        break;

                    case "Supply Prediction":
                        const reorderList = this.predictSupplyNeeds(test.data);
                        const supplyPassed = JSON.stringify(reorderList.sort()) === 
                                          JSON.stringify(test.expectedReorder.sort());
                        console.log(`${test.name}: ${supplyPassed ? "✅" : "❌"} (Reorder: ${reorderList.join(", ")})`);
                        break;
                }
            } catch (error) {
                console.error(`${test.name} failed:`, error);
            }
        }
    }

    // Helper Methods
    async registerPatient(data) {
        if (!data.firstName || !data.lastName || !data.dob) {
            throw new Error("Missing required fields");
        }
        
        this.testData.patients.push({
            ...data,
            id: Date.now(),
            registrationTime: new Date().toISOString()
        });
        
        return true;
    }

    async calculateWaitTime(data) {
        const {
            currentPatients,
            severity,
            staffCount,
            averageTimePerPatient = 20 // Default average time per patient
        } = data;

        const patientsPerStaff = currentPatients / staffCount;
        const baseWaitTime = patientsPerStaff * averageTimePerPatient;

        const severityFactor = (21 - severity) / 20; // 20 severity = 0.05, 1 severity = 1

        let finalWaitTime = Math.round(baseWaitTime * severityFactor);

        if (severity > 15) {
            finalWaitTime = Math.min(finalWaitTime, 10);
        }

        return Math.max(0, finalWaitTime);
    }

    async calculateSeverity(symptoms) {
        const severityPoints = {
            'chest pain': 15,
            'shortness of breath': 14,
            'fever': 6,
            'cough': 5,
            'sore throat': 3,
            'runny nose': 2
        };

        const totalSeverity = symptoms.reduce((sum, symptom) => 
            sum + (severityPoints[symptom] || 1), 0);
        
        return Math.min(20, Math.max(1, Math.round(totalSeverity / symptoms.length)));
    }

    calculateDistance(point1, point2) {
        const R = 3959; // Earth's radius in miles
        const lat1 = this.toRadians(point1.lat);
        const lat2 = this.toRadians(point2.lat);
        const dLat = this.toRadians(point2.lat - point1.lat);
        const dLon = this.toRadians(point2.lng - point1.lng);

        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1) * Math.cos(lat2) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    toRadians(degrees) {
        return degrees * (Math.PI/180);
    }

    // Cost-effective resource management methods
    calculateOptimalStaffing(data) {
        const { currentStaff, expectedPatients, timeSlot, dayOfWeek } = data;
        
        // Base staffing ratio: 1 staff per 4 patients
        let baseStaff = Math.ceil(expectedPatients / 4);
        
        // Peak time adjustments (more staff during busy hours)
        const peakTimes = {
            "morning": { "monday": 1.2, "saturday": 1.3, "sunday": 1.4 },
            "evening": { "friday": 1.3, "saturday": 1.4 },
            "night": { "friday": 1.2, "saturday": 1.3 }
        };
        
        const multiplier = peakTimes[timeSlot]?.[dayOfWeek] || 1;
        return Math.ceil(baseStaff * multiplier);
    }

    calculateRoomUtilization(data) {
        const { availableRooms, criticalPatients, regularPatients, observationPatients } = data;
        
        // Room weights based on patient type
        const roomWeights = {
            critical: 1.5,    // Critical patients need more room resources
            regular: 1.0,     // Regular patients use standard room resources
            observation: 0.5  // Observation patients can share resources
        };
        
        const totalWeightedRooms = (criticalPatients * roomWeights.critical) +
                                 (regularPatients * roomWeights.regular) +
                                 (observationPatients * roomWeights.observation);
        
        return totalWeightedRooms / availableRooms;
    }

    predictSupplyNeeds(data) {
        const { currentSupplies, dailyUsage, reorderTime } = data;
        const reorderList = [];
        
        // Calculate days of supply remaining and check against reorder time
        for (const [item, quantity] of Object.entries(currentSupplies)) {
            const daysRemaining = quantity / dailyUsage[item];
            if (daysRemaining <= reorderTime) {
                reorderList.push(item);
            }
        }
        
        return reorderList;
    }
}

module.exports = { EmergencyFinderTestSuite }; 