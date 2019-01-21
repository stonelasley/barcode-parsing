import { ApplicationIdentifier } from './application-identifier';

export const APPLICATION_IDENTIFIERS: ApplicationIdentifier[] = [
    new ApplicationIdentifier(
        '00',
        'Serial Shipping Container Code',
        18,
        false
    ),
    new ApplicationIdentifier('01', 'Global Trade Item Number', 14, false),
    new ApplicationIdentifier('02', 'GTIN of Contained Trade Items', 14, false),
    new ApplicationIdentifier('10', 'Batch/Lot Number', 20, true),
    new ApplicationIdentifier('11', 'Production Date', 6, false),
    new ApplicationIdentifier('12', 'DueDate', 6, false),
    new ApplicationIdentifier('13', 'Packaging Date', 6, false),
    new ApplicationIdentifier('15', 'Best Befor eDate YYMMDD', 6, false),
    new ApplicationIdentifier('17', 'Expiration Date', 6, false),
    new ApplicationIdentifier('20', 'Product Variant', 2, false),
    new ApplicationIdentifier('21', 'Serial Number', 20, true),
    new ApplicationIdentifier('22', 'Secondary Data Fields', 29, true),
    new ApplicationIdentifier('23n', 'Lot number[n]', 19, true),
    new ApplicationIdentifier(
        '240',
        'Additional Product Identification',
        30,
        true
    ),
    new ApplicationIdentifier('241', 'Customer Part Number', 30, true),
    new ApplicationIdentifier('242', 'Made-to-Order Variation Number', 6, true),
    new ApplicationIdentifier('250', 'Secondary Serial Number', 30, true),
    new ApplicationIdentifier('251', 'Reference to SourceEntity', 30, true),
    new ApplicationIdentifier(
        '253',
        'Global Document Type Identifier',
        17,
        true
    ),
    new ApplicationIdentifier('254', 'GLN Extension Component', 20, true),
    new ApplicationIdentifier('255', 'Global Coupon Number GCN', 25, true),
    new ApplicationIdentifier('30', 'Count of items', 8, true),
    new ApplicationIdentifier(
        '310',
        'Product Net Weight in kg',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '311',
        'Product Length/1st Dimension,in meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '312',
        'Product Width/Diameter/2nd Dimension,in meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '313',
        'Product Depth/Thickness/Height/3rd Dimension,in meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '314',
        'Product Area,in square meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '315',
        'Product Net Volume,in liters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '316',
        'Product Net Volume,in cubic meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '320',
        'Product Net Weight,in pounds',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '321',
        'Product Length/1st Dimension,in inches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '322',
        'Product Length/1st Dimension,in feet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '323',
        'Product Length/1st Dimension,in yards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '324',
        'Product Width/Diameter/2nd Dimension,in inches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '325',
        'Product Width/Diameter/2nd Dimension,in feet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '326',
        'Product Width/Diameter/2nd Dimension,in yards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '327',
        'Product Depth/Thickness/Height/3rd Dimension,in inches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '328',
        'Product Depth/Thickness/Height/3rd Dimension,in feet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '329',
        'Product Depth/Thickness/3rd Dimension,in yards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '330',
        'Container Gross Weight kg',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '331',
        'Container Length/1st Dimension Meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '332',
        'Container Width/Diameter/2nd Dimension Meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '333',
        'Container Depth/Thickness/3rdDimension Meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '334',
        'Container Area Square Meters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '335',
        'Container Gross Volume Liters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '336',
        'Container Gross Volume(CubicMeters',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '340',
        'Container Gross Weight(Pounds',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '341',
        'Container Length/1stDimension,ininches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '342',
        'Container Length/1stDimension,infeet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '343',
        'Container Length/1stDimensionin,inyards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '344',
        'Container Width/Diameter/2nd Dimension,in inches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '345',
        'Container Width/Diameter/2nd Dimension,in feet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '346',
        'Container Width/Diameter/2nd Dimension,in yards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '347',
        'Container Depth/Thickness/Height/3rd Dimension,in inches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '348',
        'Container Depth/Thickness/Height/3rd Dimension,in feet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '349',
        'Container Depth/Thickness/Height/3rd Dimension,in yards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '350',
        'Product Area(SquareInches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier('351', 'Product Area(SquareFeet', 6, false, true),
    new ApplicationIdentifier(
        '352',
        'Product Area(SquareYards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '353',
        'Container Area(SquareInches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '354',
        'Container Area(SquareFeet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '355',
        'Container Area(SquareYards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier('356', 'Net Weight(TroyOunces', 6, false, true),
    new ApplicationIdentifier(
        '357',
        'Net Weight/Volume(Ounces',
        6,
        false,
        true
    ),
    new ApplicationIdentifier('360', 'Product Volume(Quarts', 6, false, true),
    new ApplicationIdentifier('361', 'Product Volume(Gallons', 6, false, true),
    new ApplicationIdentifier(
        '362',
        'Container Gross Volume(Quarts',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '363',
        'ContainerGrossVolume(U.S.Gallons',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '364',
        'ProductVolume(CubicInches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier('365', 'ProductVolume(CubicFeet', 6, false, true),
    new ApplicationIdentifier(
        '366',
        'ProductVolume(CubicYards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '367',
        'ContainerGrossVolume(CubicInches',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '368',
        'ContainerGrossVolume(CubicFeet',
        6,
        false,
        true
    ),
    new ApplicationIdentifier(
        '369',
        'ContainerGrossVolume(CubicYards',
        6,
        false,
        true
    ),
    new ApplicationIdentifier('37', 'NumberofUnitsContained', 8, true),
    new ApplicationIdentifier(
        '390',
        'Amount payable local currency)',
        15,
        true,
        true
    ),
    new ApplicationIdentifier(
        '391',
        'Amount payable with ISO currency code',
        18,
        true,
        true
    ),
    new ApplicationIdentifier(
        '392',
        'Amount payable per single item local currency',
        15,
        true,
        true
    ),
    new ApplicationIdentifier(
        '393',
        'Amount payable persingle itemx with ISO currency code',
        18,
        true,
        true
    ),
    new ApplicationIdentifier(
        '400',
        'Customer Purchase Order Number',
        30,
        true
    ),
    new ApplicationIdentifier('401', 'Consignment Number', 30, true),
    new ApplicationIdentifier('402', 'BillofLadingnumber', 17, false),
    new ApplicationIdentifier('403', 'Routing code', 30, true),
    new ApplicationIdentifier(
        '410',
        'ShipTo/DeliverToLocationCode(GlobalLocationNumber',
        13,
        false
    ),
    new ApplicationIdentifier(
        '411',
        'BillTo/InvoiceLocationCode(GlobalLocationNumber',
        13,
        false
    ),
    new ApplicationIdentifier(
        '412',
        'PurchaseFromLocationCode(GlobalLocationNumber',
        13,
        false
    ),
    new ApplicationIdentifier(
        '413',
        'Shipfor,Deliver for,or Forward to Location Code',
        13,
        false
    ),
    new ApplicationIdentifier(
        '414',
        'Identification of a physical location',
        13,
        false
    ),
    new ApplicationIdentifier('420', 'ShipTo/DeliverToPostalCode', 20, true),
    new ApplicationIdentifier('421', 'ShipTo/DeliverToPostalCode', 15, true),
    new ApplicationIdentifier('422', 'Country of Origin', 3, false),
    new ApplicationIdentifier(
        '423',
        'Country or countries of initial processing',
        15,
        true
    ),
    new ApplicationIdentifier('424', 'Country of processing', 3, false),
    new ApplicationIdentifier('425', 'Country of disassembly', 3, false),
    new ApplicationIdentifier('426', 'Country of full process chain', 3, false),
    new ApplicationIdentifier('7001', 'NATO Stock Number NSN', 13, false),
    new ApplicationIdentifier(
        '7002',
        'UN/ECE Meat Carcasses and cuts classification',
        30,
        true
    ),
    new ApplicationIdentifier('7003', 'expiration date and time', 10, false),
    new ApplicationIdentifier('7004', 'Active Potency', 4, true),
    new ApplicationIdentifier('703n', 'Processor approval', 30, true),
    new ApplicationIdentifier(
        '8001',
        'Roll Products: Width/Length/CoreDiameter/Direction/Splices',
        14,
        false
    ),
    new ApplicationIdentifier('8002', 'Mobile phone identifier', 20, true),
    new ApplicationIdentifier(
        '8003',
        'Global ReturnableAssetIdentifier',
        30,
        true
    ),
    new ApplicationIdentifier(
        '8004',
        'Global IndividualAssetIdentifier',
        30,
        true
    ),
    new ApplicationIdentifier('8005', 'Price perUnitofMeasure', 6, false),
    new ApplicationIdentifier(
        '8006',
        'identification of the components of an item',
        18,
        false
    ),
    new ApplicationIdentifier(
        '8007',
        'International Bank Account Number',
        30,
        true
    ),
    new ApplicationIdentifier('8008', 'Date/time of production', 12, true),
    new ApplicationIdentifier(
        '8018',
        'Global ServiceRelationshipNumber',
        18,
        false
    ),
    new ApplicationIdentifier(
        '8020',
        'Payment slip preference number',
        25,
        true
    ),
    new ApplicationIdentifier(
        '8100',
        'CouponExtendedCode: Number System and Offer',
        6,
        false
    ),
    new ApplicationIdentifier(
        '8101',
        'CouponExtendedCode: Number System,Offer,End of Offer',
        10,
        false
    ),
    new ApplicationIdentifier(
        '8102',
        'CouponExtendedCode: Number System preceded by 0',
        2,
        false
    ),
    new ApplicationIdentifier('8110', 'CouponcodeID(NorthAmerica', 30, true),
    new ApplicationIdentifier('8200', 'Extended Packaging URL', 70, true),
    new ApplicationIdentifier(
        '90',
        'Mutually Agreed Between Trading Partners',
        30,
        true
    ),
    new ApplicationIdentifier('91', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('92', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('93', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('94', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('95', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('96', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('97', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('98', 'Internal Company Codes', 30, true),
    new ApplicationIdentifier('99', 'Internal Company Codes', 30, true),
];
