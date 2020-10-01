using backtrack_carrier_designation.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace backtrack_carrier_designation.DataAccess
{
    public class DB
    {
        private static string DECOSQL = "Data Source=decosql;Persist Security Info=True;User ID=PartHistoryUser;Password=PartHistoryUser";

        public static List<CarrierModel> GetCarriers()
        {
            List<CarrierModel> carriers = new List<CarrierModel>();
            string _err = string.Empty;
            string sql = "SELECT [ptrfid],[ptdatetime] FROM [ptMagnaGA].[dbo].[ptPaintReads] where [ptstation] = 'DoorSeven1' and ptdatetime >= dateadd(minute, -120, getdate()) order by ptdatetime desc";

            try
            {
                using (SqlConnection conn = new SqlConnection(DECOSQL))
                {
                    using (SqlCommand cmd = new SqlCommand(sql, conn))
                    {
                        cmd.Connection = conn;
                        conn.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var rfid = reader.GetString(reader.GetOrdinal("ptrfid"));
                                CarrierModel carrier = new CarrierModel();
                                carrier = GetCarrierData(rfid);
                                if (carrier.CarrierNumber != 0)
                                {
                                    carrier.RFID = rfid;
                                    carrier.TimeScanned = reader.GetDateTime(reader.GetOrdinal("ptdatetime"));
                                    carriers.Add(carrier);
                                }
                            }
                        }

                        reader.Close();
                        conn.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                _err = ex.Message;
            }

            return (carriers);
        }

        public static CarrierModel GetCarrierData(string rfid)
        {
            string _err = string.Empty;
            string sql = "[PaintRecords].[dbo].[GetCarrierPaintedCounts]";
            CarrierModel carrier = new CarrierModel();
            try
            {
                using (SqlConnection conn = new SqlConnection(DECOSQL))
                {
                    using (SqlCommand cmd = new SqlCommand(sql, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CarrierRFID ", rfid);
                        cmd.Connection = conn;
                        conn.Open();

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                carrier.CarrierNumber = reader.GetInt32(reader.GetOrdinal("Carrier"));
                                carrier.StyleDescription = reader.GetString(reader.GetOrdinal("Style"));
                                carrier.ColorDescription = reader.GetString(reader.GetOrdinal("Color"));
                                carrier.BottomCount = reader.GetInt32(reader.GetOrdinal("BottomCount"));
                                carrier.TopCount = reader.GetInt32(reader.GetOrdinal("TopCount"));
                                carrier.TopLimit = reader.GetInt32(reader.GetOrdinal("TopLimit"));
                                carrier.RepairsNeeded = reader.GetInt32(reader.GetOrdinal("RepairsNeeded"));
                            }
                        }

                        reader.Close();
                        conn.Close();
                    }
                }
            }
            catch (Exception ex)
            {
                _err = ex.Message;
            }

            return (carrier);
        }



    }
}
