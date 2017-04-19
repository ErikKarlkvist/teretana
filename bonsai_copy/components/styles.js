const React = require('react-native');
const {StyleSheet} = React;

var constants = {
  menuBarColor: '#757575',
  greyLight: '#fafafa',
  greyMedium: '#dadada',
  greyBorder: '#dbdbdb',
  greyAlmostStrong: '#959595',
  greyStrong: '#595959',
  bonsaiBlue: '#3fb2ff',
  bonsaiGreen: '#20c8b6'
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  menuBar: {
    backgroundColor: constants.menuBarColor,
    alignSelf:'stretch',
    height: 20
  },
  titleBarContainer: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: constants.greyMedium,
    flexDirection: 'row'
  },
  titleBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleBarText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: 'black'
  },
  footerBar: {
    height: 55,
    borderTopWidth: 1,
    borderTopColor: constants.greyBorder,
    backgroundColor: 'white'
  },
  footerIcons: {
    flexDirection: 'row'
  },
  footerSymbolContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 10
  },
  footerSymbol: {
    fontSize: 20,
    color: constants.greyAlmostStrong
  },
  footerText: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    color: constants.greyAlmostStrong
  },
  footerTextActive: {
    color: constants.bonsaiBlue
  },
  profileHeading: {
    backgroundColor: constants.greyLight,
    borderBottomColor: constants.greyMedium,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    height: 45
  },
  profileHeadingText: {
    marginLeft: 10,
    fontFamily: 'Helvetica',
    fontSize: 12,
    marginBottom: 5,
    color: constants.greyStrong
  },
  profileItem: {
    borderBottomColor: constants.greyMedium,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    alignItems:'flex-start',
    justifyContent: 'center',
    height: 62
  },
  profileItemContentText: {
    marginLeft: 15,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: constants.greyStrong
  },
  profileItemContentTypeText: {
    marginLeft: 15,
    fontFamily: 'Helvetica',
    fontSize: 14,
    marginTop: 5,
    color: constants.bonsaiGreen
  },
  logoutContainer: {
    borderBottomColor: constants.greyMedium,
    borderBottomWidth: 1,
    alignItems:'flex-start',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white'
  },
  versionText: {
    color: constants.greyMedium,
    fontFamily: 'Helvetica',
    alignSelf: 'flex-end'
  },
  versionContainer: {
    backgroundColor: constants.greyLight,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flexDirection:'column',
    height: 40,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  greenJob: {
      borderBottomColor: constants.greyMedium,
      borderBottomWidth: 1,
      borderLeftColor: constants.bonsaiGreen,
      borderLeftWidth: 5,
      backgroundColor: constants.greyLight,
      height: 80,
      flexDirection: 'row'
  },
  blueJob: {
      borderBottomColor: constants.greyMedium,
      borderBottomWidth: 1,
      borderLeftColor: constants.bonsaiBlue,
      borderLeftWidth: 5,
      backgroundColor: 'white',
      height: 80,
      flexDirection: 'row'
  },
  jobText: {
    alignItems:'flex-start',
    justifyContent: 'center',
    flex: 5
  },
  jobOverviewText: {
    marginLeft: 15,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: constants.greyStrong
  },
  jobDateText: {
    marginLeft: 15,
    fontFamily: 'Helvetica',
    fontSize: 14,
    marginTop: 5,
    color: constants.greyAlmostStrong
  },
  jobEarningContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 20,
    flex: 3
  },
  jobEarningTextGreen: {
    color: constants.bonsaiGreen,
    fontWeight: 'bold'
  },
  jobEarningTextBlue: {
    color: constants.bonsaiBlue,
    fontWeight: 'bold'
  },
  earningBorder: {
    height: 29,
    width: 77,
    justifyContent: 'center',
    alignItems:'center'
  },
  noResult: {
    marginLeft: 130,
    marginTop: 100,
    flex: 1,
  },
  myJobtext: {
    margin: 15,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  jobPageTitle: {
    fontFamily: 'Helvetica',
    color: 'black'
  },
  jobPageContainer: {
    backgroundColor: constants.greyLight
  },
  jobPageDescriptionContainer: {
    margin: 20,
  },
  seperationLine: {
    borderBottomColor: constants.greyMedium,
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF'
  },
  jobPageDescription: {
    fontFamily: 'Helvetica',
    marginTop: 20,
    fontSize: 12,
    color: constants.greyStrong,
  },
  exitButton: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20
  },
  jobPageTitles: {
    alignItems: 'flex-end'
  },
  jobPageInformatonTitle:{
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: constants.greyMedium,
    flex: 1,
    marginTop: 5
  },
  jobPageInformatonContent: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: constants.greyStrong,
    flex: 2,
    marginLeft: 15,
    marginTop: 5
  },
  jobPageInterestedButton: {
    color: constants.bonsaiBlue,
    alignSelf: 'center',
    margin: 10,
    fontSize: 15
  },
  jobPageMapButton: {
    alignSelf: 'center',
    margin: 10,
    fontSize: 15
  },
  jobPageContactButton: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 15
  },
  freeJobNumFreeJobsDisp: {
    color: 'red',
    fontSize: 15,
    marginRight: -15,
    marginTop: -25
  },
  numberOfJobsText: {
    backgroundColor: 'red',
    fontSize: 9,
    marginTop: -13,
    marginRight: -15,
    color: 'white'
  }
});

module.exports = styles;
module.exports.constants = constants;
