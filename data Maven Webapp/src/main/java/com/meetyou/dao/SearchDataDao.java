package com.meetyou.dao;

import java.util.ArrayList;

import com.meetyou.entity.SearchData;

/**
 * <p>文件名称：SearchDataDao.java</p>
 * <p>文件描述：</p>
 * <p>版权所有： 版权所有(C)2013-2099</p>
 * <p>公   司： 美柚 </p>
 * <p>内容摘要： </p>
 * <p>其他说明： </p>
 *
 * @version 1.0
 * @author <a> href="mailto:chenzhiwei@linggan.com">chenzhiwei</a>
 * @since 2016-1-21 上午8:29:31
 */

public interface SearchDataDao {
    public ArrayList<SearchData> getAllData();

    public ArrayList<SearchData> getData(String startDate, String endDate);
}
